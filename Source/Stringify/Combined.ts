
export { fromCombined }

import { Combined , isAnd , Query } from '..'
import { fromExpression , wrap } from '.'


function fromCombined < Type extends Query > ( conditional : Combined<Type> ){

    const filters = ( isAnd(conditional) )
        ? conditional.and
        : conditional.or

    const combinator = ( isAnd(conditional) )
        ? 'And' : 'Or'

    const valid =  filters
        .map(( filter ) => fromExpression(filter,combinator))
        .filter(Boolean)

    if( valid.length )
        return valid
            .map(wrap)
            .join(' AND ')

    return null
}
