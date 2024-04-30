# `flex` - propriedade do item

## Recapitulando

- `flex-grow` valores possíveis:
- `flex-shrink` valores possíveis:
- `flex-basis` valores possíveis:

O `flex` é um atalho para `flex-grow`, `flex-shrink`, `flex-basis` nessa ordem.

Considerando os valores padrão de cada um dessas propriedades, o valor padrão do `flex` é `flex: 0 1 auto`

|                   | `flex-grow` | `flex-shrink` | `flex-basis` | observação             |
| :---------------- | :---------: | :-----------: | :----------: | :--------------------- |
| `flex`            |     `0`     |      `1`      |    `auto`    | valor padrão do `flex` |
| `flex: 1`         |     `1`     |      `1`      |     `0`      |                        |
| `flex: 2`         |     `2`     |      `1`      |     `0`      |                        |
| `flex: 3 2 300px` |     `3`     |      `2`      |   `300px`    |                        |
