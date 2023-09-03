
export type { Or }
export { isOr , or }

import { Expression , Query } from '..'


interface Or < Type extends Query > {
    or : Array<Expression<Type>>
}


function or < Type extends Query > ( ... filters : Array<Expression<Type>> ){
    return { or : filters } satisfies Or<Type>
}


function isOr < Type extends Query > ( value : any ) : value is Or<Type> {
    return Object.hasOwn(value,'or')
}
