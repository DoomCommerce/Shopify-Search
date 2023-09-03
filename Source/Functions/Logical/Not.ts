
export type { Not }
export { not }

import { And , Or } from '.'


interface Not {
    not : And | Or
}


function not ( filter : And | Or ){
    return {
        not : filter
    }
}
