
export type { Filter }
export { isFilter }

export * from './Include'
export * from './Exclude'
export * from './Queries'

import { isInclude , isExclude , Include , Exclude , Query } from '.'


type Filter < Type extends Query > =
    | Include<Type>
    | Exclude<Type>


function isFilter < Type extends Query > ( value : any ) : value is Filter<Type> {
    return isExclude(value)
        || isInclude(value)
}
