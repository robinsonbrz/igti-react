# React I


<details>
<summary>Notas Professor Raphael Gomide</summary>
Professor Raphael Gomide
Sexta-feira3 Nov em 19:14
Pessoal, deixo aqui o material e algumas informações importantes sobre o Módulo 2 - React I:

Deixo em anexo todo o código-fonte das videoaulas.
A configuração mais compatível para executar os projetos deste módulo é:
Node versão 14.x ou 16.x
Yarn 1.x
Para realizarem o Trabalho Prático, consumam todo o conteúdo até "Criando componentes mais robustos - Parte II", inclusive.
Para realizarem o Desafio, consumam todo o conteúdo do Módulo.
Criei um documento no Notion onde deixo dicas, erratas, links, etc. sobre as aulas. Esse conteúdo será constantemente atualizado. EsteLinks para um site externo. é o link.

Pessoal, uma observação importante sobre a aula 3.6:

Infelizmente os dados fornecidos em countries.json (e countries.js) ficaram obsoletos, principalmente quanto às imagens.
Na época da elaboração do projeto, fiz uma geração local dos dados para não sobrecarregar a API oficial.
Entretanto, a API foi atualizada e as URL's de imagens não são mais padronizadas (variam de país para país).
Uma alternativa seria utilizar a URL oficial https://restcountries.com/v3.1/allLinks para um site externo. para obter os dados, pois lá eles estarão, em regra, sempre atualizados.
Por outro lado, esta API é pública e gratuita e corre-se o risco de estar fora do ar de tempos em tempos (já passei por isso durante uma aula ao vivo, por exemplo. Por isso optei por ter os dados locais).
Adicionei esta informação ao Notion oficial do móduloLinks para um site externo..
 

Att.,

Prof. Raphael Gomide

</details>



[Notion - Módulo 01 React](https://rrgomide.notion.site/React-I-dbc66e36837a4720801f301acbccd373)



## Capítulo 1. Ambiente de Desenvolvimento
[Aula 1.1 Introdução](https://www.youtube.com/watch?v=raNMa_P5EP8&list=PLbENDFQw0TC7wPQO5JiUmqxEf_CPjy-d2&t=654s)


[Aula 1.2 Instalação do Node.js](https://youtu.be/FmS_EH_L89A?list=PLbENDFQw0TC7wPQO5JiUmqxEf_CPjy-d2)
- Instalação e teste do Node.js, npm e npx.
    - node -v                                                          
- Instalação e teste do Yarn.
- Instalação de algumas bibliotecas úteis, como o rimraf e o serve.
- Instalação e configuração do VSCode Portable.
- Criação de um projeto React com a biblioteca create-react-app.
    ```bash
    npx create-react-app ambiente
    ```





[Aula 1.3 Instalação do VSCode e create-react-app](https://youtu.be/9_5_jq8hy60?list=PLbENDFQw0TC7wPQO5JiUmqxEf_CPjy-d2)

```bash
npx create-react-app ambiente
cd ambiente
npm start
```


```bash
Compiled successfully!

You can now view ambiente in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.127:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```



[Aula 1.4 Estudo de um app criado com o create-react-app](https://youtu.be/eDm9ci3NhyQ?list=PLbENDFQw0TC7wPQO5JiUmqxEf_CPjy-d2)

Em ambiente/src apagar:
    - app.css
    - app.test.js
    - index.css
    - logo.svg
    - reportWebVitals.js
    - setupTests.js

- Utilização de um projeto base, fornecido pelo professor.
- Projeto “limpo” e com integração ao Tailwind CSS.
- Sugestão de extensões.




[Aula 1.5 Estudo de um app criado com o projeto-base](https://youtu.be/Ri7Jvmy89g8?list=PLbENDFQw0TC7wPQO5JiUmqxEf_CPjy-d2)


Package.json configurado para utilizar
Node modules é onde são instaladas as dependências
yarn lê as dependências
É mais rápido rebuildar o projeto do que copiar a pasta buildada de um projeto


```bash
yarn dev
```


Capítulo 2. Introdução ao React
[Aula 2.1 – Introdução ao React](mod02/proj-base-1.5/.env.example)

Javascript library for building user interfaces

- Declarativo (mais explicito)
    - Componentes reativos
    - Mais foco no estado do app e regras de negócio
    - Menos foco em manipulação do DOM
    - Manipulação do DOM performática (Virtual DOM)
- Baseado em componentes
    - alto grau de reutilização de código

Virtual DOM
- Manipulação performática do DOM.
-  A manipulação manual do DOM é considerada uma
operação cara (lenta).
- O React só modifica o DOM nos locais que foram
realmente alterados.
- Esse processo é mais conhecido como
Reconciliation.


Termos importantes

- Componente:
    - Função que agrupa determinado comportamento.
    - Em regra, realiza processamento e retorna dados renderizados (HTML + CSS).
    - Se bem escritos, podem ser reaproveitados.
    - Uma aplicação React é geralmente composta por diversos componentes.
- JSX:
    - JavaScript XML.
    - Utilizada pelo React para a escrita da renderização de componentes.
- Sintaxe de importação e exportação:
    - Palavras-chave import e export.
    - Faz parte do JavaScript Moderno (ES6+).
    - Utilizadas para definirmos o que utilizar (import) e o que fornecer (export) durante a
    - escrita do código-fonte.
- props:
    - Propriedades de componentes. Consideradas “somente leitura”.
    - Semelhante aos atributos de tags HTML.
    - Existe uma prop especial – children.
    - Utilizados para o envio e recebimento de dados entre componentes.

- Closure:
    - Função implementada dentro do escopo de outra função.
    - Permite o acesso ao escopo externo.
    - Muito utilizado pelo React na criação de componentes, através da criação de funções para lidar com ocorrência de eventos (cliques, digitação, etc.).

- State:
    - Representa o estado de componentes.
    - Estado: dado que pode ser modificado com o tempo.
    - Exemplos: dados de formulários, Back End, etc.



- Hooks:
    - Estrutura do React que pode ser vinculada (hooked) a componentes.
    - Internamente, são implementadas como funções.
    - Atuam diretamente na reatividade do React.
    - Convenção: começar com o prefixo “use”.
    - Principais hooks: useState e useEffect.
    - É possível criar nossos próprios hooks.

- useState:
    - oHook para lidar com estado.
    - oDevolve um valor e função modificadora (setter).
    - oSempre que o setter é invocado, uma nova renderização do componente é agendada e pode ocorrer a qualquer momento.
    - Isso é feito de forma assíncrona.

useEffect:
    - Hook para lidar com “efeitos colaterais” (side effects).
    - Palavra-chave: sincronização.
    - Estado do app x estado do mundo.
    - Permite, por exemplo:
    - Manipular o DOM manualmente.
    - Monitorar eventos do navegador.
    - Trabalhar com o Back End.


[Sandbox sample](https://codesandbox.io/s/react-counter-rrgomide-jzo7n?file=/src/App.js)

Código com os termos comentados anteriormente
```javascript
// Importação do hook useState
import { useEffect, useState } from "react";

/**
 * Declaração do componente
 * O export indica que ele
 * poderá ser utilizado externamente
 */
export default function App() {
  // CSS in JS
  const { containerStyle } = styles;

  // Exemplo de utilização de useEffect
  useEffect(() => {
    document.title = "react-counter";
  }, []);

  // JSX
  return (
    <div style={containerStyle}>
      <h1>react-counter</h1>

      {/* Utilização de outro componente */}
      <Counter />
    </div>
  );
}

// Outro componente
function Counter() {
  // Exemplo de utilização de useState
  const [count, setCount] = useState(0);

  // Closure
  function handleDecrement() {
    setCount((currentCount) => currentCount - 1);
  }

  // Closure
  function handleIncrement() {
    setCount(count + 1);
  }

  // JSX com props
  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <input type="text" value={count} readOnly />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

const styles = {
  containerStyle: {
    backgroundColor: "lightgray",
    padding: "10px",
    fontFamily: "Arial, sans-serif"
  }
};
```



[Aula 2.2 react-hello – Instalação do React Developer Tools e introdução ao JSX](https://youtu.be/ea30YQXMo9Q?list=PLbENDFQw0TC7wPQO5JiUmqxEf_CPjy-d2)

```
Roteiro - react-hello
=====================

(x) Obter projeto-base, renomear pasta para "react-hello" e
   instalar dependências com o comando "yarn"

(x) Repassar rapidamente o projeto "react-hello" inicial
   (cópia do "projeto-base")

(x) Utilizar .env

(x) Abrir projeto com "yarn dev"

(x) Instalar "React Developer Tools" no Google Chrome

() App.js
   (x) Falar sobre JSX
   (x) Falar de class x className e for x htmlFor
   (x) Falar sobre abertura e fechamento de tags
   (x) Trocar título para react-hello em App.js e index.html 
   (x) Remover conteúdo atual de <main>
   (x) Incluir, em <main>, um parágrafo para renderizar 
      nome + idade
   (x) Mostrar como interpolar dados no JSX através 
      da sintaxe de chaves { }

   (x) Componentizar <Header> e <Main>, explicando o  
      conceito de "props"
      (x) Criar Header "na mão"
      (x) Criar Main com o apoio do snippet "_rfc"

	  (x) Criar props com string, boolean, number,
	     array, object e função (evento)

   (x) Falar sobre a necessidade de interação do usuário.
      No React, isso pode ser feito com a utilização 
      de estado (state) e o hook useState

   (x) Criar, em <main>, um input de texto 

   (x) Tentar, de alguma forma, manipular o valor do 
      input e refletí-lo no parágrafo

   (x) Explicar o conceito de state em React
   (x) Criar state para "name" com o Hook useState
   (x) Fazer com que o input leia e altere "name" 

   (x) Componentizar o input de name
   
   (x) Criar input do tipo "date" e persistir 
      estado para "birthDate"

      (x) Criar função para calcular idade a partir 
         da data de nascimento
		 
      (x) Verificar que o input do tipo date 
         trabalha com strings no formato yyyy-mm-dd 

      (x) Verificar que o input permite datas inválidas (ex: 30/02). 
         Controlar isso, inserindo o texto '?' para a idade

   (x) Refatorar componentes de input para utilizar a prop
      id e autoFocus corretamente

   (x) Explicar o conceito de "efeito colateral" (side effect)

   (x) Criar useEffect para incluir o nome digitado no título da aba
   
      (x) Mostrar effect sem deps e enfatizar que ele vai ser 
         executado "além do necessário" com a troca de state 
         do input de data 

      (x) Mostrar effect com deps === [] e enfatizar que ele vai executar 
         somente uma vez, o que não é o caso 

      (x) Mostrar effect com deps === [name] e enfatizar que é o ideal 
         neste caso

  (x) Criar componente <Timer /> para ser exibido/removido com 
     checkbox. Demonstrar exigência da limpeza do intervalo 
     com o retorno da função de useEffect
		 
  (x) Revisar componentes com o React Developer Tools

  (x) Criar useEffect para indicar que o app está online/offline

  (x) Limpar o app para disponibilização, removendo arquivos "desnecessários",
     como por exemplo a pasta "node_modules". Use a biblioteca rimraf para isso.
```





[Aula 2.3 react-hello – JSX, interpolação e introdução ao Tailwind CSS](https://youtu.be/Ckyt-g83kwk?list=PLbENDFQw0TC7wPQO5JiUmqxEf_CPjy-d2)




[Aula 2.4 react-hello – Componentização](https://youtu.be/wqWWON1ms4s?list=PLbENDFQw0TC7wPQO5JiUmqxEf_CPjy-d2)

Pasta src/components
Header.js
Componentes iniciam com letra maiúscula



[Aula 2.5 react-hello – Entendendo as props](https://youtu.be/iR9YcdSCRwE?list=PLbENDFQw0TC7wPQO5JiUmqxEf_CPjy-d2)

<div> ocupa espaço na memória
<fragment> não ocupa espaço


[Aula 2.6 react-hello – Estado com useState](https://youtu.be/UNuhav9xP1g)

Uma função dentro da outra closure

[Aula 2.7 react-hello – Componentização de < input >s e trabalhando com eventos](https://youtu.be/gfrMaKfcMic)


[Aula 2.8 react-hello – Cálculo de idade a partir da data de nascimento](https://www.youtube.com/watch?v=vX_lV9eGA14)




[Aula 2.9 react-hello – Refatoração dos componentes de < input >](https://youtu.be/O_9sRSDJyNk)


[Aula 2.10 react-hello – Introdução ao useEffect](https://youtu.be/ovs-Fq5mOUA)


[Aula 2.11 react-hello – Criação do componente <Timer />](https://youtu.be/HbsYM5u12Mk)


[Aula 2.12 react-hello – Utilizando useEffect com cleanup function](https://youtu.be/Oy7bJfIsQqg)


[Aula 2.13 react-hello – Indicador de app online/offline](https://youtu.be/KYKcxckB9Fs)



Capítulo 3 – Criando componentes mais robustos
[Aula 3.1 – React – Entendendo a prop key, prop drilling e Composition](https://youtu.be/eaKCLUQmZzI)
[Aula 3.2 – react-countries – Organização do projeto](https://youtu.be/SjemvcYA_lg)
[Aula 3.3 – react-countries – Implementação do input de filtro de países](https://youtu.be/KHPJ7EoDF0Q)
[Aula 3.4 – react-countries – Filtragem de países](https://youtu.be/Ob6g6WhOync)
[Aula 3.5 – react-countries – Renderizando múltiplos componentes e a prop "key"](https://youtu.be/APz8UFCiywg)
[Aula 3.6 – react-countries – Estilização dos países](https://youtu.be/A_20RnPUwPk)
[Aula 3.7 – react-countries – Implementação de países visitados](https://youtu.be/Ry4wIQvzzDw)
[Aula 3.8 – react-countries – "Prop drilling" e o padrão "Composition"](https://youtu.be/D-B4E1K4NBg)

Trabalho Prático do Módulo 2

Primeira Aula Interativa

Capítulo 4 – O projeto react-flash-cards-v1
[Aula 4.1 – React – Entendendo a técnica "lifting state up"](https://youtu.be/wxWeM7-Xr9s)
[Aula 4.2 – react-flash-cards-v1 – Organização do projeto](https://youtu.be/JP0Xc3ZuSXo)
[Aula 4.3 – react-flash-cards-v1 – Criação do componente <FlashCard />](https://youtu.be/Dd-gyjY_ETI)
[Aula 4.4 – react-flash-cards-v1 – Renderizando vários "FlashCards"](https://youtu.be/SUyAnbA2UzQ)
[Aula 4.5 – react-flash-cards-v1 – Implementação de Radio Buttons – parte 1](https://youtu.be/W-NAGaKVvmE)
[Aula 4.6 – react-flash-cards-v1 – Implementação de Radio Buttons – parte 2](https://youtu.be/JzcfKKOE1RI)
[Aula 4.7 – react-flash-cards-v1 – Aplicando a técnica "lifting state up" ](https://youtu.be/ov_uHXW0rI0)

Capítulo 5 – O projeto react-flash-cards-v2
[Aula 5.1 – Introdução ]()
[Aula 5.2 – react-flash-cards-v2 – Criação do Back End]()
[Aula 5.3 – react-flash-cards-v2 – Integração do Back End e Front End – parte 1](https://youtu.be/dys37-fCjho)
[Aula 5.4 – react-flash-cards-v2 – Integração do Back End e Front End – parte 2](https://youtu.be/VYkS_0XhrWk)
[Aula 5.5 – react-flash-cards-v2 – Integração do Back End e Front End – parte 3](https://youtu.be/s-oFo2Z0gTQ)
[Aula 5.6 – react-flash-cards-v2 – Utilização da biblioteca react-tabs](https://youtu.be/2WA7-o7Rm6U)
[Aula 5.7 – react-flash-cards-v2 – Utilização de formulários – parte 1](https://youtu.be/Jk_rjhPIDwM)
[Aula 5.8 – react-flash-cards-v2 – Utilização de formulários – parte 2](https://youtu.be/pklQ6VMaDe0)
[Aula 5.9 – react-flash-cards-v2 – Utilização de formulários – parte 3]()
[Aula 5.10 – react-flash-cards-v2 – Utilização de formulários – parte 4]()
[Aula 5.11 – react-flash-cards-v2 – Finalização do CRUD – parte 1]()
[Aula 5.12 – react-flash-cards-v2 – Finalização do CRUD – parte 2]()

Capítulo 6 – O projeto react-flash-cards-v3
[Aula 6.1 – Introdução]()
[Aula 6.2 – Criação do Back End com o glitch.com]()
[Aula 6.3 – Implantação do Front End no Netlify]()
[Aula 6.4 – Implementação da biblioteca react-toastify]()

Desafio do Módulo 2

Segunda Aula Interativa