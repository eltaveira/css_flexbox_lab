# `ordem` - Propriedade Flex Item

Recebe qualquer valor numérico, e altera a ordem dos elementos renderizados na tela.

```html
<section class="container column">
  <div class="item flex-grow">1</div>
  <div class="item order2 flex-grow">2</div>
  <div class="item flex-grow">3</div>
  <div class="item order-1 flex-grow">4</div>
</section>
```

A ordem será, 4, 1, 3, 2. Pois div4 com order: -1 é o menor de todos. div1 tem order: 0, então é o segundo item depois da div4. div3 também tem order: 0, porém é declarado depois da div1, e portanto ficará depois dele. Por fim div2, que tem o maior order: 2.