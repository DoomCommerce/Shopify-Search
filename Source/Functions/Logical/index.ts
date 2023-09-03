
export * from './Not'
export * from './And'
export * from './Or'

export type { Combinator , Combined , Logical }
export { isLogical }

import { isNot , isAnd , isOr , Not , And , Or } from '.'
import { Query } from '..'


type Combined < Type extends Query > =
    | And <Type>
    | Or <Type>

type Logical < Type extends Query > =
    | Combined <Type>
    | Not <Type>

type Combinator =
    | 'And'
    | 'Or'


function isLogical < Type extends Query > ( value : any ) : value is Logical<Type> {
    return isNot(value)
        || isAnd(value)
        || isOr(value)
}
