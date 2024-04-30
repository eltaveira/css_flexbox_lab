# `flex-grow` (Crescimento) - Propriedade Flex Item

A propriedade `flex-grow` dá a habilidade de o componente crescer dentro do container pai. O `flex-grow` é um atributo definido nos filhos diretos do container pai.

- O VALOR DO `flex-grow` sempre é `0`. Mas o valor é de `0` a infinito. Ou seja, `0`, `1`, `2`...

- `flex-grow: 0` esse filho não cresce. Se todos os filhos forem definidos com `flex-grow: 0` então nenhum deles crescem para as extremidades. Da mesma forma se todos forem definidos como `flex-grow: 1`, `flex-grow: 2`... e assim por diante. Isso porque eles sempre terão o mesmo peso.

- Se em elementos filhos do container `div1`, `div2` e `div3` forem definidos como `flex-grow: 0`, `flex-grow: 1` e `flex-grow: 2` respectivamente. O crescimento será proporcional a essa ordem. Começando pela menor `div1` até a maior `div 3`