
export type { Properties , Filter }

export * from './Include'
export * from './Exclude'

import { Include , Exclude } from '.'


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
