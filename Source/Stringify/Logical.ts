
export { fromLogical }

import { isNot , Not , And , Or } from '..'
import { fromCombined , wrap } from '.'


function fromLogical ( value : And | Or | Not ) : null | string {

    const input = ( isNot(value) )
        ? value.not
        : value

    let output = fromCombined(input)

    if( isNot(value) )
        output &&= `NOT ${ wrap(output) }`

    return output
}
