
export { searchify , include , exclude , not , and , or  }


interface Properties {

    channels ?: Array<string>
    tags ?: Array<string>

    orders ?: {
        from : number
        to : number
    }
}


interface Include {
    include : Properties
}

interface Exclude {
    exclude : Properties
}

type Filter =
    | Include
    | Exclude

type Combinator =
    | 'And'
    | 'Or'

interface Or {
    or : Array<Expression>
}

interface And {
    and : Array<Expression>
}

interface Not {
    not : And | Or
}

type Expression = And | Or | Not | Exclude | Include


function searchify ( value : And | Or | Not ) : string {

    if( isAnd(value) || isOr(value) )
        return stringifyCondition(value)

    if( isNot(value) )
        return `NOT ${ wrap(searchify(value.not)) }`

    throw `Unknown value type` + JSON.stringify(value)
}

function toString ( value : Expression , combinator : Combinator ){

    if( isAnd(value) || isOr(value) || isNot(value) )
        return searchify(value)

    if( isInclude(value) || isExclude(value) )
        return stringifyFilter(value,combinator)

    throw `Unknown value type` + JSON.stringify(value)
}


function stringifyCondition ( conditional : And | Or ){

    const filters = ( isAnd(conditional) )
        ? conditional.and
        : conditional.or

    const combinator = ( isAnd(conditional) )
        ? 'And' : 'Or'

    return filters
        .map(( filter ) => toString(filter,combinator))
        .filter(( value ) => value.length )
        .map(wrap).join(' AND ')

}

function stringifyFilter ( filter : Filter , combinator : Combinator ){

    const exclude = isExclude(filter)

    const properties = ( exclude )
        ? filter.exclude
        : filter.include

    let filters : Array<string> = []

    for ( const type in properties ){

        const key = type as keyof Properties

        const value = properties[ key ]

        switch ( key ){
        case 'tags' :
            filters.push( ... ( value as Array<string> ).map(( tag ) => `tag:'${ tag }'`) )
            break
        case 'channels' :
            filters.push( ... ( value as Array<string> ).map(( tag ) => `sales_channel:'${ tag }'`) )
            break
        case 'orders' :

            const { from , to } = ( value as { from : number , to : number } )

            filters.push(
                `name:>=${ from }` ,
                `name:<=${ to }`
            )
            break

        }
    }

    if( filters.length < 1 )
        return ''

    if( exclude )
        filters = filters.map(( filter ) => `NOT ${ wrap(filter) }`)

    const separator = ( combinator === 'And' )
        ? ' AND ' : ' OR '

    return filters.join(separator)
}

function exclude ( properties : Properties ){
    return {
        exclude : properties
    }
}

function include ( properties : Properties ){
    return {
        include : properties
    }
}


function or ( ... filters : Array<Expression> ){
    return {
        or : filters
    }
}

function and ( ... filters : Array<Expression> ){
    return {
        and : filters
    }
}

function not ( filter : And | Or ){
    return {
        not : filter
    }
}


function isNot ( value : Expression ) : value is Not {
    return Object.hasOwn(value,'not')
}

function isAnd ( value : Expression ) : value is And {
    return Object.hasOwn(value,'and')
}

function isOr ( value : Expression ) : value is Or {
    return Object.hasOwn(value,'or')
}

function isExclude ( value : Expression ) : value is Exclude {
    return Object.hasOwn(value,'exclude')
}

function isInclude ( value : Expression ) : value is Include {
    return Object.hasOwn(value,'include')
}


function wrap ( value : string ){
    return `( ${ value } )`
}
