
export type { Exclude }
export { isExclude , exclude }

import { Properties , Query } from '..'


interface Exclude <Type extends Query> {
    exclude : Properties [ Type ]
}


function exclude < Type extends Query > ( properties : Properties [ Type ] ){
    return { exclude : properties } satisfies Exclude<Type>
}


function isExclude < Type extends Query > ( value : any ) : value is Exclude<Type> {
    return Object.hasOwn(value,'exclude')
}
