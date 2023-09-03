
export * from './Properties'
export * from './Logical'

export type { Expression }

import { Include , Exclude } from './Properties'
import { Not , And , Or } from './Logical'


type Expression = And | Or | Not | Exclude | Include
