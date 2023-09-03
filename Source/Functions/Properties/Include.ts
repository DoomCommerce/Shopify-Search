
export type { Include }
export { include }

import { Properties } from '.'


interface Include {
    include : Properties
}


function include ( properties : Properties ){
    return {
        include : properties
    }
}
