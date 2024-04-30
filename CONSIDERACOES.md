- Na prática, sempre utilizaremos o `flex` no lugar de definir as 3 propriedades (`flex-grow`, `flex-basis`, `flex-shrink`) do Flex Item.

- Na prática, ao invés de utilizar `flex-direction` e `flex-flow` utilizaremos `flex-flow` que é um atalho pra esses dois respectivamente.

|                            | `flex-direction` | `flex-wrap` | observação                                                     |
| :------------------------- | :--------------- | :---------- | :------------------------------------------------------------- |
| `flex-flow`                | `row`            | `nowrap`    | São valores padrão `flex-direction: row` e `flex-wrap: nowrap` |
| `flex-flow: row nowrap`    | `row`            | `nowrap`    | Não muda nada, já é o default do `flex-flow`                   |
| `flex-flow: row wrap`      | `row`            | `wrap`      |                                                                |
| `flex-flow: column nowrap` | `column`         | `nowrap`    |                                                                |
| `flex-flow: column wrap`   | `column`         | `wrap`      |                                                                |

- várias outras combinações são possíveis, inclusive com `reverse` de cada propriedade.
