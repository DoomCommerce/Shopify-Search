
export type { Include }
export { isInclude , include }

import { Properties , Expression } from '..'


interface Include {
    include : Properties
}


function include ( properties : Properties ){
    return {
        include : properties
    } satisfies Include
}


function isInclude ( value : any ) : value is Include {
    return Object.hasOwn(value,'include')
}
