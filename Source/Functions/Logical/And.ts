
export type { And }
export { and }

import { Expression } from '../'


interface And {
    and : Array<Expression>
}


function and ( ... filters : Array<Expression> ){
    return {
        and : filters
    }
}
