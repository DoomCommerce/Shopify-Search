
export type { Not }
export { isNot , not }

import { Expression , And , Or } from '..'


interface Not {
    not : And | Or
}


function not ( filter : And | Or ){
    return {
        not : filter
    }
}


function isNot ( value : Expression ) : value is Not {
    return Object.hasOwn(value,'not')
}
