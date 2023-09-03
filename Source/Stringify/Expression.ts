
export { fromExpression }

import { Expression, Combinator , isLogical , isFilter } from '..'
import { fromProperties , fromLogical } from '.'


function fromExpression ( value : Expression , combinator : Combinator ){

    if( isLogical(value) )
        return fromLogical(value)

    if( isFilter(value) )
        return fromProperties(value,combinator)

    throw `Unknown value type` + JSON.stringify(value)
}
