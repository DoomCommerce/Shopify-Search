
export { searchify }

import { fromLogical , Logical } from '..'


function searchify ( value : Logical ) : string {
    return fromLogical(value) ?? ''
}
