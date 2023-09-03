
export { fromCombined }

import { fromExpression , wrap } from '.'
import { isAnd , And , Or } from '..'


function fromCombined ( conditional : And | Or ){

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
