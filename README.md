
<div align = center >

[![Badge NPM]][NPM]

<br>

# Shopify Search <br> Query Builder

Create search query strings with helper functions.

</div>

<br>

<div align = center >

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

</div>

<br>
<br>

## Installation

Install the module as dependency.

```sh
npm install @doomcommerce/shopify-search
```

<br>

Alias the module for ease of use.

```json
"paths" : {
    "Search" : [ "node_modules/@doomcommerce/shopify-search" ] ,
}
```

<br>
<br>

## Usage

The module provides the following helper functions:

[<kbd> <br> searchify <br> </kbd>][Searchify]
[<kbd> <br> and <br> </kbd>][And]
[<kbd> <br> or <br> </kbd>][Or]
[<kbd> <br> not <br> </kbd>][Not]
[<kbd> <br> include <br> </kbd>][Include]
[<kbd> <br> exclude <br> </kbd>][Exclude]

<br>

### Searchify

Stringifies `and` & `or` parameters.

```ts
const string = searchify( and( /* ... */ ) )
```

```ts
const string = searchify( or( /* ... */ ) )
```

<br>

<a name = and-or ></a>

### And & Or

Combines child expressions together with their respective operator.

```ts
const expression = and( /* A */ , /* B */ )
```

```txt
( A ) AND ( B )
```

Marks `include` & `exclude` statements to use their respective operator.

```ts
const expression = and( include() ) // Properties in include use 'AND' to combine
```

<br>

### Not

The child expression is wrapped in a negation statement.

```ts
const expression = not( /* ... */ )
```

```txt
NOT ( ... )
```

<br>

<a name = include-exclude ></a>

### Include & Exclude

Collection of optional filters that can be combined ( + negated ).

```ts
include({

    orders : {
        from : 1000 ,
        to : 10000
    },

    channels : [ 'gid://shopify/Channel/123' ]
    tags : [ 'Tag' ]
})
```

<br>


<!----------------------------------------------------------------------------->

[Searchify]: #searchify
[Include]: #include-exclude
[Exclude]: #include-exclude
[Not]: #not
[And]: #and-or
[Or]: #and-or

[Badge NPM]: https://img.shields.io/npm/v/%40doomcommerce%2Fshopify-search?style=for-the-badge&logoColor=white&logo=NPM
[NPM]: https://www.npmjs.com/package/@doomcommerce/shopify-search

[Button Examples]: https://img.shields.io/badge/Examples-14539a?style=for-the-badge&logoColor=white&logo=GitHub

[Examples]: https://github.com/DoomCommerce/Shopify-Search/tree/Stable/Examples
