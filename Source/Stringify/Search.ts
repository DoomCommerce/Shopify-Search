
export { searchify }

import { fromLogical , Logical , Query } from '..'


function searchify < Type extends Query > ( value : Logical<Type> ) : string {
    return fromLogical(value) ?? ''
}
