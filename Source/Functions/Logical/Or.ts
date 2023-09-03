
export type { Or }
export { isOr , or }

import { Expression } from '..'


interface Or {
    or : Array<Expression>
}


function or ( ... filters : Array<Expression> ){
    return {
        or : filters
    } satisfies Or
}


function isOr ( value : any ) : value is Or {
    return Object.hasOwn(value,'or')
}
