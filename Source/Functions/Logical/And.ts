
export type { And }
export { isAnd , and }

import { Expression } from '..'


interface And {
    and : Array<Expression>
}


function and ( ... filters : Array<Expression> ){
    return {
        and : filters
    } satisfies And
}


function isAnd ( value : any ) : value is And {
    return Object.hasOwn(value,'and')
}
