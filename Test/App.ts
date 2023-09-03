
import { searchify , include ,exclude , not , and , or } from '../Source/mod'


const search = searchify(

    and(

        or(
            include({
                channels : [ 'A' ]
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


console.log(search)
