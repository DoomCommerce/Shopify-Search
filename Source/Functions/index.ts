
export * from './Properties'
export * from './Logical'

export type { Expression }

import { Include , Exclude , Query } from './Properties'
import { Not , And , Or } from './Logical'


type Expression < Type extends Query > =
    | Include <Type>
    | Exclude <Type>
    | Not <Type>
    | And <Type>
    | Or <Type>
