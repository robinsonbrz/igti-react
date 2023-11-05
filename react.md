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





[Aula 1.3 Instalação do VSCode e create-react-app]()

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

- Utilização de um projeto base, fornecido pelo professor.
- Projeto “limpo” e com integração ao Tailwind CSS.
- Sugestão de extensões.

[Aula 1.4 Estudo de um app criado com o create-react-app]()
[Aula 1.5 Estudo de um app criado com o projeto-base]()

Capítulo 2. Introdução ao React
[Aula 2.1 – Introdução ao React]()
[Aula 2.2 react-hello – Instalação do React Developer Tools e introdução ao JSX]()
[Aula 2.3 react-hello – JSX, interpolação e introdução ao Tailwind CSS]()
[Aula 2.4 react-hello – Componentização]()
[Aula 2.5 react-hello – Entendendo as props]()
[Aula 2.6 react-hello – Estado com useState]()
[Aula 2.7 react-hello – Componentização de < input >s e trabalhando com eventos]()
[Aula 2.8 react-hello – Cálculo de idade a partir da data de nascimento]()
[Aula 2.9 react-hello – Refatoração dos componentes de < input >]()
[Aula 2.10 react-hello – Introdução ao useEffect]()
[Aula 2.11 react-hello – Criação do componente <Timer />]()
[Aula 2.12 react-hello – Utilizando useEffect com cleanup function]()
[Aula 2.13 react-hello – Indicador de app online/offline]()

Capítulo 3 – Criando componentes mais robustos
[Aula 3.1 – React – Entendendo a prop key, prop drilling e Composition]()
[Aula 3.2 – react-countries – Organização do projeto]()
[Aula 3.3 – react-countries – Implementação do input de filtro de países]()
[Aula 3.4 – react-countries – Filtragem de países]()
[Aula 3.5 – react-countries – Renderizando múltiplos componentes e a prop "key"]()
[Aula 3.6 – react-countries – Estilização dos países]()
[Aula 3.7 – react-countries – Implementação de países visitados]()
[Aula 3.8 – react-countries – "Prop drilling" e o padrão "Composition"]()

Trabalho Prático do Módulo 2

Primeira Aula Interativa

Capítulo 4 – O projeto react-flash-cards-v1
[Aula 4.1 – React – Entendendo a técnica "lifting state up"]()
[Aula 4.2 – react-flash-cards-v1 – Organização do projeto]()
[Aula 4.3 – react-flash-cards-v1 – Criação do componente <FlashCard />]()
[Aula 4.4 – react-flash-cards-v1 – Renderizando vários "FlashCards"]()
[Aula 4.5 – react-flash-cards-v1 – Implementação de Radio Buttons – parte 1]()
[Aula 4.6 – react-flash-cards-v1 – Implementação de Radio Buttons – parte 2]()
[Aula 4.7 – react-flash-cards-v1 – Aplicando a técnica "lifting state up" ]()

Capítulo 5 – O projeto react-flash-cards-v2
[Aula 5.1 – Introdução ]()
[Aula 5.2 – react-flash-cards-v2 – Criação do Back End]()
[Aula 5.3 – react-flash-cards-v2 – Integração do Back End e Front End – parte 1]()
[Aula 5.4 – react-flash-cards-v2 – Integração do Back End e Front End – parte 2]()
[Aula 5.5 – react-flash-cards-v2 – Integração do Back End e Front End – parte 3]()
[Aula 5.6 – react-flash-cards-v2 – Utilização da biblioteca react-tabs]()
[Aula 5.7 – react-flash-cards-v2 – Utilização de formulários – parte 1]()
[Aula 5.8 – react-flash-cards-v2 – Utilização de formulários – parte 2]()
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