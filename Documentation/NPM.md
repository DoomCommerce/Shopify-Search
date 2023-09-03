
<br>

<div align = center >

# Shopify Search <br> Query Builder

Create search query strings with helper functions.

</div>

<br>

<div align = center >

[![Button Installation]][Installation]  
[![Button Usage]][Usage]  
[![Button Examples]][Examples]

</div>

<br>

```ts

const inRange = include({
    orders : {
        from : 1005 ,
        to : 1010
    }
})

const filterBy = exclude({
    channels : [ 'gid://shopify/Channel/183109583163' ] ,
    tags : [ 'Custom Shipping Rate' ]
})

searchify(and(inRange,filterBy))
```

<div align = center >

```txt
( name:>=1005 AND name:<=1010 ) AND ( NOT ( 
sales_channel:'gid://shopify/Channel/183109583163' ) 
AND NOT ( tag:'Custom Shipping Rate' ) )
```

*Resolved search query will be optimized in the future.*

</div>

<br>

<!----------------------------------------------------------------------------->

[Button Installation]: https://img.shields.io/badge/Installation-539c3f?style=for-the-badge&logoColor=white&logo=docusign
[Button Examples]: https://img.shields.io/badge/Examples-14539a?style=for-the-badge&logoColor=white&logo=apacheparquet
[Button Usage]: https://img.shields.io/badge/Usage-b85b4a?style=for-the-badge&logoColor=white&logo=applearcade


[Installation]: https://github.com/DoomCommerce/Shopify-Search/tree/Stable/Documentation/Installation.md
[Examples]: https://github.com/DoomCommerce/Shopify-Search/tree/Stable/Examples
[Usage]: https://github.com/DoomCommerce/Shopify-Search/tree/Stable/Documentation/Usage.md
