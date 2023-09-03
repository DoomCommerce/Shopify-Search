
export type { Or }
export { or }

import { Expression } from '../'


interface Or {
    or : Array<Expression>
}


function or ( ... filters : Array<Expression> ){
    return {
        or : filters
    }
}
