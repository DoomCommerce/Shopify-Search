
export type { And }
export { isAnd , and }

import { Expression , Query } from '..'


interface And < Type extends Query > {
    and : Array<Expression<Type>>
}


function and < Type extends Query > ( ... filters : Array<Expression<Type>> ){
    return { and : filters } satisfies And<Type>
}


function isAnd < Type extends Query > ( value : any ) : value is And<Type> {
    return Object.hasOwn(value,'and')
}
