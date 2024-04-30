# `flex-basis` (Base) - Propriedade Flex Item


O `flex-basis` define o tamanho inicial do flex item, antes da distribuição do espaço restante.

Enquanto o valor padrão do `flex-grow` é `0`, o valor padrão do `flex-basis` é `auto`.

Quando `flex-grow: 1`, o crescimento do item com `flex-grow`, respeita o conteúdo interno. `flex-grow: 0` nada cresce ao redor.

O `flex-basis` pode assumir valores `auto`, `0` ou algum unidade fixa de tamanho como `10px`, `1rem`, `calc()` etc...

Quando definido um valor `flex-basis: 110px` com `flex-grow` padrão `0`. O tamanho máximo do item será 110px, ou seja `flex-basis` é como se fosse um `max-width`, porém esse item pode ultrapassar esse valor de 110px, caso o conteúdo seja maior que isso. O conteúdo de um flex item, pode ser um texto ou outro elemento HTML.

Quando o `flex-basis` é `110px` é o `flex-grow` é um valor diferente de `0` o flex-basis tenta manter o width máximo de 110px, porém o flex-grow faz com que o elemento cresça.