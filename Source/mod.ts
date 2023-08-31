
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
    combinator : Combinator
    include : Properties
}

interface Exclude {
    combinator : Combinator
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
    not : Expression
}

type Expression = And | Or | Not | Exclude | Include


function searchify ( value : Expression ) : string {

    if( isAnd(value) )
        return value.and.map(searchify).map(wrap).join(' AND ')

    if( isOr(value) )
        return value.or.map(searchify).map(wrap).join(' OR ')

    if( isInclude(value) || isExclude(value) )
        return toString(value)

    if( isNot(value) )
        return `NOT ${ wrap(searchify(value.not)) }`

    throw `Unknown value type` + JSON.stringify(value)
}

function toString ( filter : Filter ){

    const { combinator } = filter

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

    if( exclude )
        filters = filters.map(( filter ) => `NOT ${ wrap(filter) }`)

    const separator = ( combinator === 'And' )
        ? ' AND ' : ' OR '

    return filters.join(separator)
}

function exclude ( combinator : Combinator , properties : Properties ){
    return {
        combinator ,
        exclude : properties
    }
}

function include ( combinator : Combinator , properties : Properties ){
    return {
        combinator ,
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

function not ( filter : Expression ){
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
