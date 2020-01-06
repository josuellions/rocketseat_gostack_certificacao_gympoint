# RocketSeat Gostack Certificacao - Gympoint

### Projeto Certificação RocketSeat

### 2019/12/09 a 2020/01/05

### Nome Aplicação: Gympoint

### Developer: Josuel A. Lopes

### Padrão de código Airbnb

### Ambiente Desenvolvimento:

##### Sistema Operacional: Linux - Ubuntu 16.04LTS

##### IDE Desenvolvimento: Visual Studio Code 1.41.1

##### Versão Desenvolvimento Mobile: Android

#### Containers Docker

##### Banco dados - Postgres / Mongo / Redis

#### Jobs, Gerenciamento e Fila envio EMAILs

##### Queue

#### Tratativa de Erros/Exceções

##### Sentry

##### Youch

### Configurações base

#### Configurar arquivo ".env.example" com variàveis ambiente, renomear para ".env"

### Executar console

### Diretorio aplicação backend, para excecutar backend: yarn dev

### Diretorio aplicação backend, para excecutar Jobs email: yarn queue

### WEB

#### FERRAMENTAS

##### Reactotron

##### customize-cra

##### Validaçao YUP

### Esturtura projeto

########################## INICIO ###########################
#################### PRIMEIRA FASE - 01 #####################

###

<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src=".github/logo.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 2: Gympoint, o início
</h3>

<blockquote align="center">“Não espere para plantar, apenas tenha paciência para colher”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-02?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>SEGUNDA FASE - 02

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-02/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-02?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

A aplicação que iremos dar início ao desenvolvimento a partir de agora é um app gerenciador de academia, o **Gympoint**.

Nesse primeiro desafio vamos criar algumas funcionalidades básicas que aprendemos ao longo das aulas até aqui. Esse projeto será desenvolvido aos poucos até o fim da sua jornada onde você terá uma aplicação completa envolvendo back-end, front-end e mobile, que será utilizada para a **certificação do bootcamp**, então, bora pro código!

### Um pouco sobre as ferramentas

Você deverá criar a aplicação do zero utilizando o [Express](https://expressjs.com/), além de precisar configurar as seguintes ferramentas:

- Sucrase + Nodemon; - OK
- ESLint -Airbnb -ok
  ? How would you like to use ESLint? To check syntax, find problems, and enforce code style
  ? What type of modules does your project use? JavaScript modules (import/export)
  ? Which framework does your project use? None of these
  ? Does your project use TypeScript? No
  ? Where does your code run? Node
  ? How would you like to define a style for your project? Use a popular style guide
  ? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
  ? What format do you want your config file to be in? JavaScript
  Checking peerDependencies of eslint-config-airbnb-base@latest
  The config that you've selected requires the following dependencies:

- Prettier - OK
- EditorConfig - OK;
- Sequelize (Utilize PostgreSQL ou MySQL); - Gympoint - ok

### Funcionalidades

Abaixo estão descritas as funcionalidades que você deve adicionar em sua aplicação.

#### 1. Autenticação

Permita que um usuário se autentique em sua aplicação utilizando e-mail e uma senha.

Crie um usuário administrador utilizando a funcionalidade de [seeds do sequelize](https://sequelize.org/master/manual/migrations.html#creating-first-seed), essa funcionalidade serve para criarmos registros na base de dados de forma automatizada.

Para criar um seed utilize o comando:

```js
yarn sequelize seed:generate --name admin-user
```

No arquivo gerado na pasta `src/database/seeds` adicione o código referente à criação de um usuário administrador:

```js
const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Administrador',
          email: 'admin@gympoint.com',
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
```

Agora execute:

```js
OBS: Com banco dados novo sem tables
yarn sequelize db:migrate
yarn sequelize db:seed:all
```

Agora você tem um usuário na sua base de dados, utilize esse usuário para todos logins daqui pra frente.

- A autenticação deve ser feita utilizando JWT. -> jsonwebtoken -OK
  -The MD5 hash for Gympointrockeseat is : 9fa6895cc740ea22235fda2ebecf54b4
- Realize a validação dos dados de entrada; - schemas validadtion com YUP - OK

#### 2. Cadastro de alunos

Permita que alunos sejam mantidos (cadastrados/atualizados) na aplicação utilizando nome, email, idade, peso e altura.

Utilize uma nova tabela no banco de dados chamada `students`.

O cadastro de alunos só pode ser feito por administradores autenticados na aplicação.

O aluno não pode se autenticar no sistema, ou seja, não possui senha.

## 📅 Entrega

Esse desafio **não precisa ser entregue** e não receberá correção. Além disso, o código fonte **não está disponível** por fazer parte do **desafio final**, que será corrigido para **certificação** do bootcamp. Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)

##

##################### SEGUNDA FASE - 02 #####################

<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src=".github/logo.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 3: Gympoint, continuando a aplicação
</h3>

<blockquote align="center">“Faça seu melhor, mas sempre com prazo de entrega”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-03?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-03/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-03?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

Durante esse desafio vamos aprimorar a aplicação Gympoint que demos início no desafio anterior implementando funcionalidades que aprendemos durante as aulas até agora.

### Funcionalidades do administrador

Abaixo estão descritas as funcionalidades que você deve adicionar em sua aplicação para administradores.

#### 1. Gestão de planos

Permita que o usuário possa cadastrar planos para matrícula de alunos, o plano deve possuir os seguintes campos:

-table = plans

- title (nome do plano);
- duration (duração em número de meses);
- price (preço mensal do plano);
- created_at;
- updated_at;

Crie alguns planos como por exemplo:

- `Start`: Plano de 1 mês por R\$129;
- `Gold`: Plano de 3 meses por R\$109/mês;
- `Diamond`: Plano de 6 meses por R\$89/mês;

- OBS: Banco Dados Zerado, sem tabelas e dados
- Exec => yarn sequelize db:migrate
- Exec => yarn sequelize db:send:all

Crie rotas para listagem/cadastro/atualização/remoção de planos;

Obs.: Essa funcionalidade é para administradores autenticados na aplicação.

#### 2. Gestão de matrículas

Apesar do aluno estar cadastrado na plataforma, isso não significa que o mesmo tem uma matrícula ativa e que pode acessar a academia.

Nessa funcionalidade criaremos um cadastro de matrículas por aluno, a matrícula possui os campos:

- student_id (referência ao aluno);
- plan_id (referência ao plano);
- start_date (data de início da matrícula);
- end_date (date de término da matrícula);
- price (preço total calculado na data da matrícula);
- created_at;
- updated_at;

A **data de início** da matrícula deve ser escolhida pelo usuário.

A **data de término** e **preço** da matrícula deve ser calculada com base no plano selecionado, por exemplo:

Data de início informada: `23/05/2019`
Plano selecionado: `Gold (3 meses)`
Data de término calculada: `23/08/2019 (3 meses depois do início)`
Preço calculado: `R$327`

Quando um aluno **realiza uma matrícula** ele recebe um e-mail com detalhes da sua inscrição na academia como plano, data de término, valor e uma mensagem de boas-vidas.

-UTILIZADO mogodb, criar imagem docker, para armazenar Notificações, estrutura e controle de envio de email, realizar configurações no variaveis de ambiente do arquivo ".env"

- Envio de EMAIL -> nodemailer (Mailtrap - DEV)
- Personalização email html: handlebarsjs - templating on steroids

- CRIANDO FILAS para envio de EMAILs, melhor performace no envio
- criar banco dados REDIS no docker para armazer strutura fila de envio emails
- nome banco dados: redisgympoint
- beequeue => controle e gerenciamento de filas
- Executar em outro termina: yarn queue (para rodar a serviço execução de filas de envio email)

Crie rotas para listagem/cadastro/atualização/remocação de matrículas;

Obs.: Essa funcionalidade é para administradores autenticados na aplicação.

### Funcionalidades do aluno

Abaixo estão descritas as funcionalidades que você deve adicionar em sua aplicação para alunos.

#### 1. Checkins

Quando o aluno chega na academia o mesmo realiza um check-in apenas informando seu ID de cadastro (ID do banco de dados);

Esse check-in serve para monitorar quantas vezes o usuário frequentou a academia na semana.

A tabela de `checkins` possui os campos:

- student_id (referência ao aluno);
- created_at;
- updated_at;

O usuário só pode fazer **5 checkins** dentro de um período de 7 dias corridos.

Exemplo de requisição: `POST https://gympoint.com/students/3/checkins`

Crie uma rota para listagem de todos checkins realizados por um usuário com base em seu ID de cadastro;

Exemplo de requisição: `GET https://gympoint.com/students/3/checkins`

#### 2. Pedidos de auxílio

O aluno pode criar pedidos de auxílio para a academia em relação a algum exercício, alimentação ou instrução qualquer;

A tabela `help_orders` deve conter os seguintes campos:

- student_id (referência ao aluno);
- question (pergunta do aluno em texto);
- answer (resposta da academia em texto);
- answer_at (data da resposta da academia);
- created_at;
- updated_at;

Crie uma rota para a academia listar todos pedidos de auxílio sem resposta;

Crie uma rota para o aluno cadastrar pedidos de auxílio apenas informando seu ID de cadastro (ID do banco de dados);

Exemplo de requisição: `POST https://gympoint.com/students/3/help-orders`

Crie uma rota para listar todos pedidos de auxílio de um usuário com base em seu ID de cadastro;

Exemplo de requisição: `GET https://gympoint.com/students/3/help-orders`

Crie uma rota para a academia responder um pedido de auxílio:

Exemplo de requisição: `POST https://gympoint.com/help-orders/1/answer`

Quando um pedido de auxílio for respondido, o aluno deve receber um e-mail da plataforma com a pergunta e resposta da academia;

|-> - Envio de EMAIL -> nodemailer (Mailtrap - DEV)

- Usando FILAS para envio de EMAILs -
- no banco dados REDIS no docker para armazer strutura fila de envio emails, nome banco dados: redisgympoint

- Personalização email html: handlebarsjs - templating on steroids

- TRATAMENTO DE ERROS - MONITORAMENTO APLICAÇÃO
- Sentry

## 📅 Entrega

Esse desafio **não precisa ser entregue** e não receberá correção. Além disso, o código fonte **não está disponível** por fazer parte do **desafio final**, que será corrigido para **certificação** do bootcamp. Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)

##

##################### TERCEIRA FASE - 03 #####################

<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src=".github/logo.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 9: Gympoint, front-end web
</h3>

<blockquote align="center">“Mude você e todo o resto mudará naturalmente”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-09?color=%2304D361" />

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361" />
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361" />

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-09/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-09?style=social" />
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 🚀 Sobre o desafio

Durante esse desafio vamos construir o front-end da aplicação Gympoint que criamos o back-end durante os desafios dos módulos 02 e 03 de Node.js.

A versão web do projeto Gympoint representa a visão da academia, ou seja, todas funcionalidades presentes na versão web são para administradores. As funcionalidades para o aluno serão dispostas no aplicativo mobile.

### Novas funcionalidades

Antes de iniciar a parte web, **adicione as seguintes funcionalidades no back-end** da aplicação:

1. Adicione um campo boolean `true/false` na listagem de matrículas indicando se a matrícula está ativa ou não, ou seja, se a data de término é posterior à atual e a data de início inferior (utilize um campo `VIRTUAL`).

Por exemplo, no model de Matrícula, adicione um novo campo:

```js
active: {
  type: Sequelize.VIRTUAL(Sequelize.BOOLEAN, [
    'start_date',
    'end_date',
  ]),
  get() {
    return (
      isBefore(this.get('start_date'), new Date()) &&
      isAfter(this.get('end_date'), new Date())
    );
  },
},
```

E na query:

```js
const registrations = await Registration.findAll({
  attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
});
```

2. Permita que a listagem de alunos (`/users`) seja filtrada por nome recebendo um Query Parameter `?q=Diego` e buscando no banco usuários com esse filtro (utilize o operador `like`). Caso o parâmetro não seja passado, retorne todos usuários;

### Informações importantes

1. Antes de deletar qualquer registro do banco crie uma verificação adicinal usando a função `confirm` do JavaScript;
2. Para formatação de datas utilize sempre a biblioteca `date-fns`;
3. Não realize formatações de valores dentro do `return ()` nos componentes React, opte por formatar os dados assim que recebidos da API;
4. No cadastro/edição de planos e matrículas os inputs com fundo cinza são calculados automaticamente com base na seleção dos outros valores;
5. No cadastro/edição de matrícula deve ser possível buscar o aluno pelo nome, utilize o método `async` da biblioteca [React Select](https://react-select.com/home#async). Os planos devem ser buscados da API assim que a página carregar e não devem possuir filtro.

### Opcionais

1. Adicione paginação no front-end e back-end para todas listagens;
2. Utilize máscaras para inputs numéricos de valores, peso e altura;

## 🎨 Layout

O layout do desafio está em anexo como um arquivo `.sketch`.

Caso esteja usando OS X / Windows você pode abrir esse arquivo com um software chamado [Zeplin](https://zeplin.io).

Caso esteja no Linux ou não vá usar o Zeplin existe uma pasta chamada `Gympoint WEB` junto com esse repositório, baixe-a e acesse o arquivo `index.html` para visualizar as telas da aplicação.

## 📅 Entrega

Esse desafio **não precisa ser entregue** e não receberá correção. Além disso, o código fonte **não está disponível** por fazer parte do **desafio final**, que será corrigido para **certificação** do bootcamp. Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)

##

##################### QUARTA FASE - 04 #####################

# Mobile

## Desenvolvimento somente em Android / Sistema Operacional Linux-Ubuntu 16.04LTS

## Ajuste SDK - Android

### Alterar o caminho do SDK no arquivo em ~/android/local.properties

## Configurando ESLint

> yarn eslint --init
> yarn run v1.21.1
> \$ /home/josuel/Projects_2019/CursosRocketSeat/CursoBootCamp/desafio-final-certificacao/projeto_certificacao_Gympoint_09/Gympoint/mobile/gympoint/node_modules/.bin/eslint --init
> ? How would you like to use ESLint? To check syntax, find problems, and enforce code style
> ? What type of modules does your project use? JavaScript modules (import/export)
> ? Which framework does your project use? React
> ? Does your project use TypeScript? No
> ? Where does your code run?
> ? How would you like to define a style for your project? Use a popular style guide
> ? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
> ? What format do you want your config file to be in? JavaScript
> Checking peerDependencies of eslint-config-airbnb@latest
> The config that you've selected requires the following dependencies:

## Configurando Reactotron

## Escopo projeto

<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src=".github/logo.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 10: Gympoint, mobile
</h3>

<blockquote align="center">“O tempo que leva para realizar seus sonhos vai passar de qualquer forma”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-10?color=%2304D361" />

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361" />
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361" />

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-10/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-10?style=social" />
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 🚀 Sobre o desafio

Durante esse desafio vamos construir o app mobile da aplicação Gympoint que criamos o back-end durante os desafios dos módulos 02 e 03 de Node.js e front-end no desafio do módulo 09 de ReactJS.

A versão mobile do projeto Gympoint representa a visão do aluno, ou seja, todas funcionalidades presentes nesse projeto são para alunos.

### Opcionais

1. Adicione scroll infinito com paginação na listagem de check-ins e pedidos de auxílio;

## 🎨 Layout

O layout do desafio está em anexo como um arquivo `.sketch`.

Caso esteja usando OS X / Windows você pode abrir esse arquivo com um software chamado [Zeplin](https://zeplin.io).

Caso esteja no Linux ou não vá usar o Zeplin existe uma pasta chamada `Gympoint Mobile` junto com esse repositório, baixe-a e acesse o arquivo `index.html` para visualizar as telas da aplicação.

## 📅 Entrega

Esse desafio **não precisa ser entregue** e não receberá correção. Além disso, o código fonte **não está disponível** por fazer parte do **desafio final**, que será corrigido para **certificação** do bootcamp. Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
