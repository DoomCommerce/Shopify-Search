
export * from './Functions'

export { searchify }

import {
    Properties , Expression , Exclude ,
    Include , Not , And , Or , isExclude ,
    isInclude , isNot , isAnd , isOr
} from './Functions'


type Filter =
    | Include
    | Exclude

type Combinator =
    | 'And'
    | 'Or'



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

function wrap ( value : string ){
    return `( ${ value } )`
}
