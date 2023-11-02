# CSS  - Cascade Style Sheet - folha de estilo em cascata

## Utilizando CSS

- [FEN 3.1   Introdução a CSS e sintaxe básica](https://www.youtube.com/watch?v=7ZnsxW9p8dk)

- Referência ao arquivo pelo html
  
  ```html
  <head>
    <link rel="stylesheet" href="exemplo-1.css" />
  </head>  
  ```

- Entre tags ```<style> no próprio HTML```
  
  ```html
    - <style>
    div {
        color: blue;
    }
  </style>
  ```

- Semântica
  ![](resources/imgs/semantica-css.png)

- [3.2.1 Seletores CSS](https://www.youtube.com/watch?v=AUG6ml3v8Yk)

- Seletores de elementos
  ![](resources/imgs/seletores-elemento.png)

- Seletor de elemento
  ![](resources/imgs/seletor-elemento.png)

- Seletor de todos elementos
  ![](resources/imgs/seletor-todos-elementos.png)

- Seletor por classe
  ![](resources/imgs/seletor-classe.png)

- Elemento com atributo id igual a id.
  ![](resources/imgs/seletor-elemento-com-id.png)

- Combinador Descendente e filho
  ![](resources/imgs/combinador-elemento-filho.png)
  
  - Elemento F descendente de E.
  - Elemento F filho de E.

    - .c1 div 
        - divs descendentes de c1
    - .c1 > div
        - divs filhos diretos da classe c1

- Combinador + e ~
  ![](resources/imgs/elemento-irmao-de-e-precedido.png)
  
  - Elemento F é irmão de E e precedido por E.
  - Elemento F irmão de E e imediatamente precedido por E.

- Elemento E com atributo atrib de valor x.

### Pseudoclasses

Pseudo-classes are keywords that specify a special state of an element in CSS. They are used to style elements based on their attributes, content, or interaction. 

- Pseudoclasses
  ![](resources/imgs/pseudoclasses.png)

- Seletores compostos
  ![](resources/imgs/seletores-compostos.png)

- Seletores complexos
  ![](resources/imgs/seletores-complexos.png)

- Especifidade de seletores
  ![](resources/imgs/especificidade-01.png)

- Especifidade de seletores
  ![](resources/imgs/especificidade-02.png)

- [FEN 3.2.2 Usar seletores para estilizar uma lista](https://www.youtube.com/watch?v=nXnoATgeniA)

```css
Estilizar as listas no HTML dado, que possuem a classe `listaBonita`,
de acordo com os requisitos abaixo, mas sem mexer no HTML. Note que as regras
CSS não podem afetar listas que não possuem a classe `listaBonita`.

[ ] Os itens da lista não devem ter bullets (`list-style: none`).
li filho direto de ul.listaBonita
ul.listaBonita > li {
  list-style: none;
  }

[ ] A cor da fonte deve ser `#353535` (`color`).
ul.listaBonita {
  color: #353535;
}

[ ] Devem haver bordas de 2px em volta da lista e entre cada item (`border`, `border-width`, `border-style`, `border-color`). A cor padrão da borda é `#a0a0a0`.
ul.listaBonita > li {
  list-style: none;
  border-width: 2px;
  border-color: #a0a0a0;
}


[ ] O espaçamento entre as bordas e o conteúdo do item deve ser 4px na vertical e 8px na horizontal (`padding: 4px 8px`).
ul.listaBonita > li {
  padding: 4px 8px;
}

[ ] As bordas em volta da lista devem ter cantos arredondados com raio de 3px (`border-radius`, `border-top-left-radius`, `border-top-right-radius`, etc.).
Arredondando top primeiro
ul.listaBonita > li:first-child {
  border-top-style: solid;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
Arredondamento bottom último 
ul.listaBonita > li:last-child {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
}

[ ] Itens com a classe `selecionado` devem ter cor de fundo `#bfdbff` (`background-color`) e bordas azuis de cor `#2e79db`. A borda em todos os lados de um item selecionado deve ser azul.
ul.listaBonita > li.selecionado {
  background-color: #bfdbff;
  border-color: #2e79db;
  border-bottom-style: solid;
}

ul.listaBonita > li:not(.selecionado) + li {
  border-top-style: solid;
}

[ ] A cor de fundo dos itens não selecionados deve mudar para `#ebebeb` ao passar o mouse por cima do item (pseudoclasse `:hover`).
ul.listaBonita > li:hover {
  background-color: #ebebeb;
}
```

```html
<!DOCTYPE html>
<head>
  <link rel="stylesheet" href="lista.css" />
</head>

<body>
  <ul class="listaBonita">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <ul class="listaBonita">
    <li class="selecionado">Item 1</li>
    <li class="selecionado">Item 2</li>
    <li>Item 3</li>
  </ul>

  <ul class="listaBonita">
    <li>Item 1</li>
    <li class="selecionado">Item 2</li>
    <li>Item 3</li>
    <li class="selecionado">Item 4</li>
  </ul>

  <ul class="listaBonita">
    <li>Item 1</li>
  </ul>

  <ul class="listaBonita"></ul>

  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</body>
```

```css
html {
  font-size: 18px;
  font-family: Arial;
}

ul.listaBonita > li {
  list-style: none;
  border-width: 2px;
  border-color: #a0a0a0;
  padding: 4px 8px;
  border-left-style: solid;
  border-right-style: solid;
}

ul.listaBonita {
  color: #353535;
}

ul.listaBonita > li:first-child {
  border-top-style: solid;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

ul.listaBonita > li:last-child {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
}

ul.listaBonita > li:hover {
  background-color: #ebebeb;
}

ul.listaBonita > li.selecionado {
  background-color: #bfdbff;
  border-color: #2e79db;
  border-bottom-style: solid;
}

ul.listaBonita > li:not(.selecionado) + li {
  border-top-style: solid;
}
```

- [FEN 3.3   Dimensionamento e posicionamento de elementos correto - YouTube](https://www.youtube.com/watch?v=YT6gZuY7ZFY)



Nesta aula 

Estudar dimensionamento de lementos:

- box model

- Unidades de medidas mais utilizadas

Entender como os elementos são posicionados na página

- Normal flow

- text-align

- Baseline e vertical-align



## Box model

![](/home/rob/.config/marktext/images/2023-11-02-16-13-02-image.png)



![](/home/rob/.config/marktext/images/2023-11-02-16-18-43-ksnip_20231102-161445.png)



## Unidades de medida

![](/home/rob/.config/marktext/images/2023-11-02-16-22-02-image.png)



## Overflow

O comportamento quando um conteúdo não cabe dentro de um elemento é determinado pela propriedade overflow, que pode ter os valores:

- visible (padrão): conteúdo pode ser renderizado fora do box.

- hidden: conteúdo é cortado.

- scroll: exibe scroll bar sempre.

-  auto: exibe scroll bar, se precisar.



Posicionamento de boxes

- Se não especificado, segue o normal flow (flow layout)

- Dois tipos de boxes 
  
  - block box
  
  -  inline box

Posicionamento padrão dos elementos (normal flow)



Padrão, os elementos são dispostos na página em linha (ao lado do
anterior), 



### Block box

- Exibido em uma nova linha

- Largura 100% da largura disponível em seu container

- Exemplos:  h1, div e p são block boxes, 

### Inline box

- Exibidos na mesma linha (Pode haver quebra se não houver espaço)

- widht e height não se aplicam

- margin, padding e border verticais se comportam diferente (não empurram os boxes vizinhos)

- span, a, img, em, strong
  

Margens verticais não se somam. (margin colapse)

Se os dois elementos tiverem margin = 8 a distância entre eles será 8 e não a soma 8+8.



### Propriedade text-align

Somente elementos in-line, não funciona para block boxes

- cujos valores podem ser: **left, right, center, justify**

### Propriedade vertical-align

- Controla o alinhamento vertical de inline boxes, ou células de tabelas

- Valores comuns: baseline, middle, top, bottom



<img title="" src="file:///home/rob/.config/marktext/images/2023-11-02-16-43-45-image.png" alt="" width="377">



<img src="file:///home/rob/.config/marktext/images/2023-11-02-16-46-36-image.png" title="" alt="" width="379">



<img src="file:///home/rob/.config/marktext/images/2023-11-02-16-47-08-image.png" title="" alt="" width="337">



<img src="file:///home/rob/.config/marktext/images/2023-11-02-16-47-36-image.png" title="" alt="" width="382">

![](/home/rob/.config/marktext/images/2023-11-02-16-50-09-image.png)


[FEN 3.4   Posicionamento fora do normal flow - YouTube](https://www.youtube.com/watch?v=OJR2DULSbXs)


[FEN 3.5 Flexbox layout - YouTube ](https://www.youtube.com/watch?v=sXpLceQ6nyI)


[FEN 3.5.1   Imitar layout Stack Overflow - YouTube ](https://www.youtube.com/watch?v=qZmjSneDudk)


[FEN 3.5.2   Imitar layout Stack Overflow parte 2 - YouTube ](https://www.youtube.com/watch?v=yq6lDwT8udo)


[FEN 3.5.3   Imitar layout Stack Overflow parte 3 - YouTube](https://www.youtube.com/watch?v=YyQeFMRsAdU)



jQuery sample Hide div

```javascript
    <div class="container-fluid">
        <div class="alert alert-danger" style="display: none;">
        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
        Verifique os erros abaixo e corríja-os antes de enviar os dados novamente.
        </div>
    </div>

  <script type="text/javascript">
    $(".form.theme-form").submit(function(event) {
        let fileInput = $('#id_arquivo');
        let sizeInMB = (fileInput[0].files[0].size / 1048576 ).toFixed(2);
        const maximumFileSizeMB = 99
        $("#alert-file-size").removeClass("text-danger");
        $("#alert-file-size").text("O tamanho do arquivo não deve exceder 99 MB");
        if (fileInput[0].files.length > 0 && sizeInMB > maximumFileSizeMB ) {
            $("#alert-file-size").addClass("text-danger");
            $(".alert.alert-danger").css("display", "block");
            $(".alert.alert-danger").delay(5000).fadeOut();
            $("#alert-file-size").text("O arquivo: " + fileInput[0].files[0].name + " possui: " + sizeInMB + " MB.");
            event.preventDefault();
        }
    });

  </script>
```
