
<br>

<div align = center >

[![Button Installation]][Installation]  
[![Button Usage]][Usage]  
[![Button Examples]][Examples]

</div>

<br>

# Usage

The module provides the following helper functions:

[<kbd> <br> searchify <br> </kbd>][Searchify]
[<kbd> <br> and <br> </kbd>][And]
[<kbd> <br> or <br> </kbd>][Or]
[<kbd> <br> not <br> </kbd>][Not]
[<kbd> <br> include <br> </kbd>][Include]
[<kbd> <br> exclude <br> </kbd>][Exclude]

<br>

## Searchify

Stringifies `and` & `or` parameters.

```ts
const string = searchify( and( /* ... */ ) )
```

```ts
const string = searchify( or( /* ... */ ) )
```

<br>

<a name = and-or ></a>

## And & Or

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

## Not

The child expression is wrapped in a negation statement.

```ts
const expression = not( /* ... */ )
```

```txt
NOT ( ... )
```

<br>

<a name = include-exclude ></a>

## Include & Exclude

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

[Button Installation]: https://img.shields.io/badge/Installation-539c3f?style=for-the-badge&logoColor=white&logo=docusign
[Button Examples]: https://img.shields.io/badge/Examples-14539a?style=for-the-badge&logoColor=white&logo=apacheparquet
[Button Usage]: https://img.shields.io/badge/Usage-gray?style=for-the-badge&logoColor=white&logo=applearcade

[Installation]: https://github.com/DoomCommerce/Shopify-Search/tree/Stable/Documentation/Installation.md
[Examples]: https://github.com/DoomCommerce/Shopify-Search/tree/Stable/Examples
[Usage]: #
