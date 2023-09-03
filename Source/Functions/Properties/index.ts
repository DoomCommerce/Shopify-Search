
export type { Properties , Filter }
export { isFilter }

export * from './Include'
export * from './Exclude'

import { isInclude , isExclude , Include , Exclude } from '.'


type Filter =
    | Include
    | Exclude


interface Properties {

    channels ?: Array<string>
    tags ?: Array<string>

    orders ?: {
        from : number
        to : number
    }
}


function isFilter ( value : any ) : value is Filter {
    return isExclude(value)
        || isInclude(value)
}
