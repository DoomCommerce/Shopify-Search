
export type { Exclude }
export { isExclude , exclude }

import { Properties , Expression } from '..'


interface Exclude {
    exclude : Properties
}


function exclude ( properties : Properties ){
    return {
        exclude : properties
    }
}


function isExclude ( value : Expression ) : value is Exclude {
    return Object.hasOwn(value,'exclude')
}
