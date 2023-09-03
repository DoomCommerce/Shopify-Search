
export * from './Not'
export * from './And'
export * from './Or'

export type { Combinator , Logical }

import { Not , And , Or } from '.'


type Logical = Not | And | Or

type Combinator =
    | 'And'
    | 'Or'
