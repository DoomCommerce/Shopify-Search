
export type { Query }
export { Properties }

import { ProductProps } from './Products'
import { OrderProps } from './Orders'


const Queries = {

    Products : 'Products' ,
    Orders : 'Orders' ,
    Test : 'Test'

} as const

type Queries = typeof Queries

type Query = Queries[ keyof Queries ]

type Properties < Type > =
    Type extends Query
        ? Props [ Type ]
        : never


interface Props {

    [ Queries.Products ] : ProductProps
    [ Queries.Orders ] : OrderProps
    [ Queries.Test ] : never

}
