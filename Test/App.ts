
import { searchify , include ,exclude , not , and , or } from '../Source/mod'


const search1 = searchify<'Products'>(

    and(

        or(
            include({

            })
        ),

        exclude({
        }),

        not(
            and(
                include({})
            )
        )
    )
)


console.log(search1)


const search2 = searchify<'Orders'>(

    and(

        or(
            include({
                channels : [ 'A' ] ,

            })
        ),

        exclude({
            tags : [ 'B' ]
        }),

        not(
            and(
                include({})
            )
        )
    )
)


console.log(search2)
