# Javascript - ECMAScript

- [FEN 4.1   Introdução a JavaScript - YouTube ](https://www.youtube.com/watch?v=Epyg4LLuyX8)
- JavaScript é uma linguagem dinâmica e interpretada 
  - Dinâmica pode modificar o tipo da variável com outra atribuição
  - Executada no navegador

### Adicionando script na página

- Arquivo
  
  ```html
  <script src="./js/meu-script-externo.js"></script>
  ```

- Página - inline
  
  ```html
  <script>
    console.log('Este é um script inline');
  </script>
  ```

```html
var mensagem = 'Olá';
mensagem = 'Olá Robinson';
alert(mensagem); // comentário
// comentário de uma linha
/*
comentário de várias linhas
*/
```

- [FEN 4.2   Tipos e valores em JavaScript](https://www.youtube.com/watch?v=eSDLpppU1bs)

- JavaScript possui os tipos primitivos number (número inteiro ou fracionário),
  string (sequência de caracteres) e boolean (verdadeiro ou falso). Valores primitivos
  são declarados como no código a seguir.

- Tipos de variáveis
  
  ```javascript
  var vNumber = 5.78;
  var vString = 'abacaxi';
  var vBoolean = true; 
  typeof vBoolean // retorna o tipo do objeto
  ```

- Objetos Javascript
  
  ```javascript
  var aluno1 = {
  matricula: 7627364,
  nome: 'Robinson',
  curso: 'Bootcamp Front End',
  ativo: true
  };
  ```
  
    aluno1.matricula 7627364
    aluno1.nome  Robinson
    aluno1.curso Bootcamp Front End
    aluno1.ativo true
    // Deletando um campo de um objeto criado
    delete aluno1.ativo;
    Se acessarmos uma variável de um objeto deletado ou que não existe o retorno é  undefined 

- Arrays
  
  ```javascript
  var alunos = []
  alunos.push("Robinson") 
  var frutas = ["maçã","banana","pera"]
  ```

frutas[0]
// "maçã" 

frutas[3] 
//undefined 

- Tipos primitivos
  
  - Cópia é por valor

- Cópia de objetos - por referência ou endereço de memória
  
  - copia o endereço do objeto e não o objeto em si

- [FEN 4.3   Operadores e expressões](https://www.youtube.com/watch?v=3SeeKvBHWvU)

- Operadores
  
  - Lógicos
    
    - !  // Negação
      
      - !true = false
      - !false = true
    
    - &&    // E lógico 
      
      - true && false = false 
      - false && false = false
    
    - ||    // Ou lógico
  
  - Aritméticos

            ![](resources/imgs/2023-11-02-20-00-23-image.png)

        - Operadores aritméticos de atribuição

            ![](resources/imgs/2023-11-02-20-01-32-image.png)

        - Operadores de incremento / decremento

            ![](resources/imgs/2023-11-02-20-02-31-image.png)

        - Comparação

            ![](resources/imgs/2023-11-02-20-03-04-image.png)            

        - Igualdade

            ![](resources/imgs/2023-11-02-20-03-32-image.png)

            === comparação estrita, somente tipos iguais

            == compara mesmo tipos diferentes

           - Precedência de operadores

                ![](resources/imgs/2023-11-02-20-04-45-image.png)

[FEN 4.4   Funções e escopo](https://www.youtube.com/watch?v=i10fbmje57w)

![](/home/rob/.config/marktext/images/2023-11-02-20-12-21-image.png)

![2023-11-02-20-13-31-image.png](/home/rob/.config/marktext/images/2023-11-02-20-13-31-image.png)

Variável global

Disponível em todo código, inclusive em outros arquivos de script carregados.

![](/home/rob/.config/marktext/images/2023-11-02-20-14-37-image.png)



[FEN 4.5   Comandos de decisão](https://www.youtube.com/watch?v=_OLrl5nraIo)

### Comandos de decisão

<img src="file:///home/rob/.config/marktext/images/2023-11-02-20-17-20-image.png" title="" alt="" width="210">

![](/home/rob/.config/marktext/images/2023-11-02-20-18-36-image.png)

&&

![](/home/rob/.config/marktext/images/2023-11-02-20-19-20-image.png)

Ternário

![](/home/rob/.config/marktext/images/2023-11-02-20-20-02-image.png)

switch

![](/home/rob/.config/marktext/images/2023-11-02-20-20-56-image.png)



[FEN 4.6 Comandos de repetição](https://www.youtube.com/watch?v=eAUyHzzo0YI)

### Comandos de repetição

![](/home/rob/.config/marktext/images/2023-11-02-20-22-15-image.png)

while

![](/home/rob/.config/marktext/images/2023-11-02-20-23-42-image.png)

do while

![](/home/rob/.config/marktext/images/2023-11-02-20-24-03-image.png)

for

![](/home/rob/.config/marktext/images/2023-11-02-20-24-55-image.png)

Possível utilizar o break e continue, para parar e pular uma repetição respectivamente



[FEN 4.6.1 Desafio guiado Palíndromo](https://www.youtube.com/watch?v=yOZew8rFkmY)

![](/home/rob/.config/marktext/images/2023-11-02-20-27-30-image.png)

### Interação com o DOM


[FEN 5.1   Interação básica com o DOM - YouTube](https://www.youtube.com/watch?v=qsuTjigeJ9I) 

Por meio de JavaScript é possível interagir com os elementos da página,
utilizado a API conhecida como DOM (Document Object Model). O DOM nada mais é
do que uma estrutura de dados que representa todos os elementos da página como
objetos que podem ser acessados e modificados via JavaScript. Entre outras tarefas,
podemos modificar o conteúdo da página e reagir a eventos.

```javascript
// obtém o elemento pelo id
var el1 = document.getElementById("idElemento");
// obtém o primeiro elemento capturado pelo seletor
var el2 = document.querySelector("div.destaque");
// obtém lista de todos os elementos capturados pelo seletor
var elList = document.querySelectorAll("li.selecionado");
```

Adicionalmente, podemos navegar nos elementos e seus filhos a partir da raiz. Por
exemplo, document.body.children[0] obtém o primeiro filho do elemento body.

```javascript
var el1 = document.getElementById("idElemento");
el1.textContent = "novo texto"; // muda o conteúdo de el1
```

```javascript
<button onclick="soma()">Calcular</button>
```

[FEN 5.2   Eventos - YouTube](https://www.youtube.com/watch?v=QboE5JIVdPk) 

Além de reagir a eventos por meio do atributo onclick e outros, podemos
registrar listeners de eventos via JavaScript.

```javascript
var el = document.getElementById("mybtn");
// registra listener do evento click
el.addEventListener("click", myHandler);
// se precisar, remove o listener
el.removeEventoListener("click", myHandler)
```

```javascript
// registra na fase de capturing
el.addEventListener("click", myHandler, true);
// registra na fase de bubbling
el.addEventListener("click", myHandler, false);
```

```javascript
function myHandler(event) {
console.log("clicou na posição " + event.pageX + ", " + event.pageY);
}
```

O objeto evento também nos permite chamar as funções 
- **stopPropagation** interrompe a propagação do evento,

- **preventDefault** impede o tratamento padrão do navegador (por exemplo, seguir um link ao
clicar no mesmo).

### Tipos de eventos usados frequentemente
| Evento | Disparo |
|-|-|
| focus | Elemento recebe foco. |
| blur | Elemento perde foco. |
| input | Valor de um elemento muda (input, select, textarea). |
| submit | Formulário submetido. |
| keydown | Tecla do teclado pressionada. |
| keyup | Tecla do teclado liberada. |
| click | Botão do mouse pressionado e liberado. |
| mousemove | Mouse movimentado sobre o elemento. |



[FEN 5.3   Criando elementos dinamicamente - YouTube](https://www.youtube.com/watch?v=m6q2IVMb0gg) 

Podemos utilizar as funções document.createElement e elemento.appendChild para criar elementos dinamicamente e inseri-los no DOM.
Também podemos inserir elementos antes de outro elemento informado usando elemento.insertBefore. Por fim, podemos remover elementos do DOM com a função elemento.remove.

```javascript
// Cria um elemento
var myDiv = document.createElement("div");
// Insere o elemento na página, no final do body
document.body.appendChild(myDiv);
// Cria outro elemento
var myH2 = document.createElement("h2");
myH2.textContent = "Dynamic H2";
// Insere ele antes do div
document.body.insertBefore(myH2, myDiv);
// Remove da página
myDiv.remove();
```
Uma outra maneira de criar elementos dinamicamente é por meio da
propriedade innerHTML



[FEN 5.4   Alterando estilos de elementos - YouTube](https://www.youtube.com/watch?v=yo05S4LDnf4) 

Podemos alterar os estilos de um elemento via propriedade style

```javascript
// Define style como string
el.style = "color: red; margin: 4px";
// Define propriedade individuais do style
el.style.color = "red";
```

```javascript
// Define className (que corresponde ao atributo class)
el.className = "classe1 classe2";
// Adiciona ou remove classes individualmente
el.classList.add("classe1");
el.classList.remove("classe1");
```

### Orientação a objetos em JavaScript

[FEN 6.1 Instanciando objetos - YouTube](https://www.youtube.com/watch?v=2eOTY8vCVH4) 

```javascript
function Retangulo(altura, largura) {
this.altura = altura;
this.largura = largura;
this.area = function () {
return this.altura * this.largura;
};
}
var r1 = new Retangulo(3, 4);
```

```javascript
function RetanguloV2(altura, largura) {
this.altura = altura;
this.largura = largura;
}
RetanguloV2.prototype.area = function () {
return this.altura * this.largura;
};
```

Classes e herança

```javascript
class Retangulo {
constructor(altura, largura) {
this.altura = altura;
this.largura = largura;
}
area() {
return this.altura * this.largura;
}
}
```

```javascript
class Quadrado extends Retangulo {
constructor(dimensao) {
super(dimensao, dimensao);
}
}
```

[FEN 6.2 Prototype chain - YouTube](https://www.youtube.com/watch?v=dfS0D3P-m5g)




[FEN 6.3 Classes e herança - YouTube](https://www.youtube.com/watch?v=Y5f-P6KokdY) 

### JavaScript moderno

[FEN 7.1 Let, const, desestruturação, spread e template strings - YouTube](https://www.youtube.com/watch?v=sYvstzx7fCA)

Declarações de variáveis com let e const 

Podemos usar a palavra-chave let para declarar variáveis e const para declarar constantes, que não podem ser atribuídas após a inicialização. A única diferença entre var e let é que enquanto o escopo da primeira é todo o corpo da função onde foi declarada, o escopo da segunda é apenas o bloco onde foi declarada.
Com isso, let se comporta de forma mais segura, evitando situações que podem levar a bugs no código.


```javascript
let a = 1;
const b = 1;
a = 2;
// b = 2; // erro, não pode alterar const
```

Atribuição via desestruturação
```javascript
let primos = [2, 3, 5, 7, 11, 13];
// Desestruturação de array
let [p1, p2, ...resto] = primos;
// Corresponde a let p1 = primos[0], p2 = primos[1]
let curso = {nome: "Bootcamp Front End", presencial: false, turma: 1};
// Desestruturação de objeto
let { nome, turma, ...outrosCampos } = curso;
// Corresponde a let nome = curso.nome, turma = curso.turma
```

Spread operator

```javascript
let primos = [2, 3, 5, 7, 11, 13];
let primos2 = [...primos, 17];
// Equivalente a
// let primos2 = [2, 3, 5, 7, 11, 13, 17]
let curso = {nome: "Bootcamp Front End", presencial: false, turma: 1};
let curso2 = {...curso, descricao: "Bla bla"}
// Equivalente a
// let curso2 = {nome: "Bootcamp Front End", presencial: false, turma: 1, desc
ricao: "Bla bla"}
```


Template strings ${}
```javascript
let a = 2, b = 3;
let soma = a + b;
// Template string
console.log(`${a} + ${b} = ${soma}`);
// Equivale a
console.log(a + " + " + b + " = " + soma);
```



[FEN 7.2 Arrow functions - YouTube](https://www.youtube.com/watch?v=TuQlhJywj-Y)


Arrow functions
```javascript
// Função convencional
function soma(a, b) {
    return a + b;
}
// Equivalente a arrow function
const soma = (a, b) => {
    return a + b;
}
// Também equivalente a
const soma = (a, b) => a + b;

```



[FEN 7.3 Manipulação de arrays - YouTube](https://www.youtube.com/watch?v=3KfGPr1WGgg)

Manipulação de arrays

Iteração com for of



```javascript
for (let item of array) {
    console.log(item);
}
```

```javascript
array.forEach((item, index) => {
    console.log(`${index}: ${item.name}`);
});
```

A função map transforma os elementos de um array com base em uma função
de transformação recebida, devolvendo um novo array ao final do processo.

```javascript
// Transforma array de objetos para array de strings
let names = usPresidents.map((item) => item.name);

```

A função filter filtra um array com base em uma função que é avaliada para cada elemento. Caso a função retorne true, o elemento é mantido, caso contrário o elemento é filtrado. Um novo array é devolvido ao final do processo.
```javascript
// Obtém apenas presidentes do partido republicano
let republicans = usPresidents.filter((item) => item.party == "Republican");
```

A função find procura o primeiro elemento do array para o qual a função
fornecida retorna true. O elemento encontrado é devolvido como resultado, ou null
caso não encontre.

```javascript
// Encontra primeiro presidente do partido democrata
let firstDemocratic = usPresidents.find((item) => item.party == "Democratic");
```

Função sort

Essa função ordena um array com base em uma função de comparação estipulada. Ela deve retornar um número negativo, zero ou positivo para indicar, respectivamente, se o primeiro parâmetro é menor, igual ou maior que o segundo.

```javascript
usPresidents.sort((i1, i2) => {
if (i1.birth_year < i2.birth_year) {
    return -1;
} else if (i1.birth_year > i2.birth_year) {
    return 1;
} else {
    return 0;
}
});
```



[FEN 7.4 Módulos - YouTube](https://www.youtube.com/watch?v=TLYfeciIiWg) 
### Requisições HTTP em JavaScript - Parte I

Módulos
Quando uma aplicação fica muito grande, torna-se necessário modularizar, ou seja, dividir o código em diferentes arquivos. No entanto, traz ao menos duas dificuldades:
1. Dependências entre scripts são implícitas. É necessário incluir todas as dependências de um script na página, na ordem correta.
2. Não há encapsulamento adequado (tudo que é declarado no escopo
global pode ser lido/escrito de qualquer script).
Para isso, precisamos exportar as declarações no primeiro, e importá-las no segundo. Qualquer declaração não exportada torna-se privada, visível apenas dentro do arquivo.

```javascript
<script type="module" src="./modulo_b.js"></script>
```
modulo_a.js
```javascript
function fazAlgo(){
    //...
}
export { fazAlgo };
```

modulo_b.js
```javascript
import { fazAlgo } from "./modulo_a.js";
fazAlgo()
```
Feito isso, o módulo A será carregado automaticamente, pois é uma dependência de B. Além do mais, ainda que vários módulos dependam de A, ele será incluído apenas uma vez, tornando a gestão de dependências automática.
Por fim, também podemos importar todos as declarações de um módulo por meio da sintaxe import * as ma from "./modulo_a.js". Assim, podemos usar qualquer membro exportado de A, prefixando-o com o objeto ma, por exemplo ma.fazAlgo().




[FEN 8.1 A API fetch - YouTube](https://www.youtube.com/watch?v=F2hhQfMBuQc)



[FEN 8.2  Dominando promises carregamento sequencial e paralelo - YouTube](https://www.youtube.com/watch?v=QzVPmWWAltg)



[FEN 8.3 Async await - YouTube](https://www.youtube.com/watch?v=SU6i_QVFNLE) 



[FEN 8.4   Tratamento de erros - YouTube](https://www.youtube.com/watch?v=5Um7eN7Y434) 



### Requisições HTTP em JavaScript - Parte II



[FEN 8.4.1   Desafio guiado CRUD completo - YouTube](https://www.youtube.com/watch?v=DnCRizbW51U)

Código base de requisições
```javascript
// Criar
fetch(`http://localhost:3000/employees`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(employee),
});

// Atualizar
fetch(`http://localhost:3000/employees/${id}`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(employee),
});

// Excluir
fetch(`http://localhost:3000/employees/${id}`, {
  method: "DELETE",
});
```





[FEN 8.4.2   Desafio guiado CRUD completo parte 2 - YouTube](https://www.youtube.com/watch?v=fzFJ3KYRFpI)



[FEN 8.4.3   Desafio guiado CRUD completo parte 3 - YouTube](https://www.youtube.com/watch?v=j1FNmGzjvdU)



[FEN 8.4.4   Desafio guiado CRUD completo parte 4 - YouTube](https://www.youtube.com/watch?v=RQm2NQgh70E)



### Tarefas temporizadas ou periódicas em JavaScript


[FEN 9 1   setTimeout - YouTube](https://www.youtube.com/watch?v=ShxdFG9-tbs)


Ao utilizar campos de pesquisa Ajax.
Cada letra que digitamos o evento on change dispara uma requisição para o backend.
E isso pode ser um comportamento não desejado.
Podemos inserir um delay, nessa requisição.
Esperar a digitação de uma letra e depois de 500 ms fazer a requisição para o backend.
Também resetar o temporizador caso uma nova letra seja digitada antes da requisição.

```javascript
input.addEventListener("input", withDelay(onQueryChange, 500));

function onQueryChange() {
  search(input.value);
}

let timeout;
function onQueryChangeWithDelay() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    search(input.value);
  }, 500);
}

function withDelay(fn, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
}
```



[FEN 9.2   setInterval - YouTube](https://www.youtube.com/watch?v=Yj-aVw8ZajA)

Tarefa executada em intervalos de tempo.



```javascript
function inicia() {
  setInterval(() => {
    console.log("Cada 1 segundo"));
  }, 1000);

}
inicia();
```




```javascript
function inicia() {
  relogio.textContent = formataHora(new Date());
  interval = setInterval(() => {
    relogio.textContent = formataHora(new Date());
  }, 1000);
  btn.textContent = "Para relogio";
}
inicia();
```
```javascript
const relogio = document.getElementById("relogio");
const btn = document.getElementById("btn");
let interval;

function inicia() {
  relogio.textContent = formataHora(new Date());
  interval = setInterval(() => {
    relogio.textContent = formataHora(new Date());
  }, 1000);
  btn.textContent = "Para relogio";
}
inicia();

function para() {
  clearInterval(interval);
  interval = undefined;
  btn.textContent = "Inicia relogio";g
}

function iniciaOuPara() {
  if (interval) {
    para();
  } else {
    inicia();
  }
}

function formataHora(date) {
  const h = date.getHours().toString().padStart(2, "0"),
    m = date.getMinutes().toString().padStart(2, "0"),
    s = date.getSeconds().toString().padStart(2, "0");
  return `${h}:${m}:${s}`;
}

```



[FEN 9.3   requestAnimationFrame - YouTube](https://www.youtube.com/watch?v=JbRHGtaVs1I)


Geralemente em animações.
Executa no próximo frame do navegador.
Reagendando próximas renderizações para próximos frames.

Utiliznado o <canvas>

```javascript
const cv = document.getElementById("cv");
const ctx = cv.getContext("2d");

const pos = [50, 50];
const speed = [200, 60];
const size = 300;
let lastTime;

function draw(time) {
  if (!lastTime) {
    lastTime = time;
  }
  const ellapsedTimeS = (time - lastTime) / 1000;
  lastTime = time;
  //console.log(ellapsedTime);

  ctx.fillStyle = "rgb(0, 80, 120)";
  ctx.clearRect(0, 0, 300, 300);
  
  ctx.beginPath();
  pos[0] += ellapsedTimeS * speed[0];
  pos[1] += ellapsedTimeS * speed[1];
  pos[0] = pos[0] >= size ? pos[0] % size : pos[0];
  pos[1] = pos[1] >= size ? pos[1] % size : pos[1];
  ctx.arc(pos[0], pos[1], 20, 0, 2 * Math.PI, true);
  ctx.fill();

  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

```
