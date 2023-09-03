
export { fromLogical }

import { Logical , isNot , Query } from '..'
import { fromCombined , wrap } from '.'


function fromLogical < Type extends Query > ( value : Logical<Type> ) : null | string {

    const input = ( isNot(value) )
        ? value.not
        : value

    let output = fromCombined(input)

    if( isNot(value) )
        output &&= `NOT ${ wrap(output) }`

    return output
}
