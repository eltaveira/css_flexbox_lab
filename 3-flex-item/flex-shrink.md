# `flex-shrink` (Diminuição) - Propriedade Flex Item

O `flex-shrink` define a capacidade de redução do tamanho do item. Aceita valores de `0` a `N`.

O `flex-shrink` é sempre `1` por padrão. Que permite que seu width, definido pelo `flex-basis`, `width` ou `min-width`, seja reduzido para caber no container.

- `flex-shrink: 0` não permite a diminuição do item, assim um item com `flex-basis: 300px` nunca diminuirá menos que 300px.
- `flex-shrink: 1` pode diminuir 1x o seu tamanho.
- `flex-shrink: 2` pode diminuir 2x o seu tamanho.