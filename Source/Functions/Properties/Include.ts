
export type { Include }
export { isInclude , include }

import { Properties , Expression } from '..'


interface Include {
    include : Properties
}


function include ( properties : Properties ){
    return {
        include : properties
    }
}


function isInclude ( value : Expression ) : value is Include {
    return Object.hasOwn(value,'include')
}
