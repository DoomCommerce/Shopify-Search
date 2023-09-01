
<div align = center >

# Shopify Search <br> Query Builder

Create search query strings with helper functions.

</div>

<br>

[<img height = 500 width = 18% align = left  src = 'Resources/Space.svg' >][#]
[<img height = 500 width = 18% align = right src = 'Resources/Space.svg' >][#]
<div align = left >

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

</div>

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

### And

### Or

### Not

### Include

### Exclude

<br>

<!----------------------------------------------------------------------------->

[Searchify]: #searchify
[Include]: #include
[Exclude]: #exclude
[Not]: #not
[And]: #and
[Or]: #or

[#]: #
