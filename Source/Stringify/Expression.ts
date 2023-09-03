
export { fromExpression }

import { Expression, Combinator , isLogical , isFilter , Query } from '..'
import { fromProperties , fromLogical } from '.'


function fromExpression < Type extends Query > ( value : Expression<Type> , combinator : Combinator ){

    if( isLogical(value) )
        return fromLogical(value)

    if( isFilter(value) )
        return fromProperties(value,combinator)

    throw `Unknown value type` + JSON.stringify(value)
}
