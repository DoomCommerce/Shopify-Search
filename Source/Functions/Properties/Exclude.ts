
export type { Exclude }
export { isExclude , exclude }

import { Properties } from '..'


interface Exclude {
    exclude : Properties
}


function exclude ( properties : Properties ){
    return {
        exclude : properties
    } satisfies Exclude
}


function isExclude ( value : any ) : value is Exclude {
    return Object.hasOwn(value,'exclude')
}
