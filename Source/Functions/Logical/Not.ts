
export type { Not }
export { isNot , not }

import { Combined, Query } from '..'


interface Not < Type extends Query > {
    not : Combined<Type>
}


function not < Type extends Query > ( filter : Combined<Type> ){
    return { not : filter } satisfies Not<Type>
}


function isNot < Type extends Query > ( value : any ) : value is Not<Type> {
    return Object.hasOwn(value,'not')
}
