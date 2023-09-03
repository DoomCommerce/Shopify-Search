
export { fromLogical }

import { isNot , isAnd , isOr , Not , And , Or } from '../mod'
import { fromCombined , wrap } from '.'


function fromLogical ( value : And | Or | Not ) : null | string {

    if( isAnd(value) || isOr(value) )
        return fromCombined(value)

    if( isNot(value) ){

        const query = fromCombined(value.not)

        if( query )
            return `NOT ${ wrap(query) }`

        return null
    }

    throw `Unknown value type` + JSON.stringify(value)
}
