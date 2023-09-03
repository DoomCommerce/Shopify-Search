
export type { Exclude }
export { exclude }

import { Properties } from '.'


interface Exclude {
    exclude : Properties
}


function exclude ( properties : Properties ){
    return {
        exclude : properties
    }
}
