
import { searchify , include , exclude , not , and } from '../../Source/mod'


const search = searchify(
    and(
        include('And',{
            orders : {
                from : 1005 ,
                to : 1010
            }
        }),
        exclude('And',{
            channels : [ 'gid://shopify/Channel/183109583163' ] ,
            tags : [ 'Custom Shipping Rate' ]
        })
    )
)

console.log(search)
