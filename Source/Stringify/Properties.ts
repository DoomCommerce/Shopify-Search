
export { fromProperties }

import { Combinator , Properties , isExclude , Filter , wrap } from '..'



function fromProperties ( filter : Filter , combinator : Combinator ){

    const exclude = isExclude(filter)

    const properties = ( exclude )
        ? filter.exclude
        : filter.include

    if( Object.keys(properties).length < 1 )
        return null

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
        return null

    if( exclude )
        filters = filters.map(( filter ) => `NOT ${ wrap(filter) }`)

    const separator = ( combinator === 'And' )
        ? ' AND ' : ' OR '

    return filters.join(separator)
}
