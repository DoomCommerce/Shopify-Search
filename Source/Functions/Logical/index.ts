
export * from './Not'
export * from './And'
export * from './Or'

export type { Combinator , Logical }
export { isLogical }

import { isNot , isAnd , isOr , Not , And , Or } from '.'


type Logical = Not | And | Or

type Combinator =
    | 'And'
    | 'Or'


function isLogical ( value : any ) : value is Logical {
    return isNot(value)
        || isAnd(value)
        || isOr(value)
}
