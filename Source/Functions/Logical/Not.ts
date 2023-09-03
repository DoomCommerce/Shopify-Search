
export type { Not }
export { isNot , not }

import { And , Or } from '..'


interface Not {
    not : And | Or
}


function not ( filter : And | Or ){
    return {
        not : filter
    } satisfies Not
}


function isNot ( value : any ) : value is Not {
    return Object.hasOwn(value,'not')
}
