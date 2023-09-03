
export { fromCombined }

import { fromProperties , fromLogical , wrap } from '.'
import { Expression, Combinator , isInclude , isExclude , isNot , isAnd , isOr , And , Or } from '../mod'


function fromCombined ( conditional : And | Or ){

    const filters = ( isAnd(conditional) )
        ? conditional.and
        : conditional.or

    const combinator = ( isAnd(conditional) )
        ? 'And' : 'Or'

    const valid =  filters
        .map(( filter ) => toString(filter,combinator))
        .filter(Boolean)

    if( valid.length )
        return valid
            .map(wrap)
            .join(' AND ')

    return null
}


function toString ( value : Expression , combinator : Combinator ){

    if( isAnd(value) || isOr(value) || isNot(value) )
        return fromLogical(value)

    if( isInclude(value) || isExclude(value) )
        return fromProperties(value,combinator)

    throw `Unknown value type` + JSON.stringify(value)
}
