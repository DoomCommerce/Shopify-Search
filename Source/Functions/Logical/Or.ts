
export type { Or }
export { isOr , or }

import { Expression } from '..'


interface Or {
    or : Array<Expression>
}


function or ( ... filters : Array<Expression> ){
    return {
        or : filters
    }
}


function isOr ( value : Expression ) : value is Or {
    return Object.hasOwn(value,'or')
}
