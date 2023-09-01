
import { searchify , include , exclude , not , and } from '../../Source/mod'


const searchA = searchify(
    and(
        include({
            orders : {
                from : 1005 ,
                to : 1010
            }
        }),
        exclude({
            channels : [ 'gid://shopify/Channel/183109583163' ] ,
            tags : [ 'Custom Shipping Rate' ]
        })
    )
)

console.log(searchA)


const searchB = searchify(
    and(
        include({
            orders : {
                from : 1005 ,
                to : 1010
            }
        }),
        exclude({
            channels : [] ,
            tags : [ ]
        })
    )
)

console.log(searchB)



const searchC = searchify(
    and(
        include({
            orders : {
                from : 1005 ,
                to : 1010
            }
        }),
        exclude({
            channels : [ 'A' , 'B' ] ,
            tags : [ 'A' , 'B' , 'C' ]
        })
    )
)

console.log(searchC)
