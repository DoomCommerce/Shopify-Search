
export * from './Functions'
export * from './Stringify'

export { searchify }

import { fromLogical } from './Stringify'
import { Logical } from './Functions'


function searchify ( value : Logical ) : string {
    return fromLogical(value) ?? ''
}
