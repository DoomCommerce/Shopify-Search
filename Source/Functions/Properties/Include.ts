
export type { Include }
export { isInclude , include }

import { Properties , Query } from '..'


interface Include < Type extends Query > {
    include : Properties<Type>
}


function include < Type extends Query = 'Products' > ( properties : Properties<Type> ) : Include<Type>
function include < Type extends Query = 'Orders' > ( properties : Properties<Type> ) : Include<Type>
function include < Type extends Query > ( properties : Properties<Type> ){
    return { include : properties } satisfies Include<Type>
}


function isInclude < Type extends Query > ( value : any ) : value is Include<Type> {
    return Object.hasOwn(value,'include')
}
