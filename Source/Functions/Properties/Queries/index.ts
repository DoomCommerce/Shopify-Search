
export type { Query }
export { Properties }

import { Properties as ProductProps } from './Products'
import { Properties as OrderProps } from './Orders'


const Queries = {

    Products : 'Products' ,
    Orders : 'Orders'

} as const

type Query =
    ( typeof Queries )[ keyof typeof Queries ]


interface Properties {

    [ Queries.Products ] : ProductProps
    [ Queries.Orders ] : OrderProps
}
