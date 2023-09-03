
export type { Filter }
export { isFilter }

export * from './Include'
export * from './Exclude'
export * from './Queries'

import { isInclude , isExclude , Include , Exclude } from '.'
import { Query } from './Queries'


type Filter < QueryType extends Query > =
    | Include<QueryType>
    | Exclude<QueryType>


function isFilter <QueryType extends Query > ( value : any ) : value is Filter<QueryType> {
    return isExclude(value)
        || isInclude(value)
}
