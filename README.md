# RocketSeat Gostack Certificação - Gympoint

### Projeto Certificação RocketSeat

#### 2019/12/09 a 2020/01/05

#### Nome Aplicação: Gympoint

#### Developer: Josuel A. Lopes

#### Padrão de código Airbnb

#### Ambiente Desenvolvimento:

##### Sistema Operacional: Linux - Ubuntu 16.04LTS

##### IDE Desenvolvimento: Visual Studio Code 1.41.1

##### Versão Desenvolvimento Mobile: Android

##### Containers Docker

##### Banco dados - Postgres / Mongo / Redis

##### Jobs, Gerenciamento e Fila envio EMAILs

###### Queue

##### Tratativa de Erros/Exceções

###### Sentry

##### Youch

### Pré-requisitos

##### Visual Code ou IDE de sua escolha -> Instalado e configurado

##### Instalar e configurar o NVM

##### Instalar e configurar o NODE LTS

##### Instalar e configurar o YARN

##### Docker -> para gerenciar banco dados, ou instalar e configurar banco dados local

##### Banco Dados -> Instalar no Docker ou Local

###### Banco Dados Postgres -> Para tabelas e dados da aplicação

###### Banco Dados MongoDB -> Para Notificações e mensagens

###### Banco Dados Redis -> Para gerenciamento de fila no envio de email

#### Realizar donwload ou clone do projeto completo, contendo "backend, web e mobile"

##### Caso download extrair conteúdo para um diretorio

### Projeto Backend

##### Desenvolvimento dos requisitos

- Envio de EMAIL -> nodemailer (Mailtrap - DEV)
- Personalização email html: handlebarsjs - templating on steroids

- Criado Filas para envio de EMAILs, melhor performace no envio
- Criado banco dados REDIS no docker para armazer strutura fila no envio emails, nome banco dados: redisgympoint
- Utilizando beequeue, para controle e gerenciamento de filas

- **adicionado funcionalidades do back-end** da aplicação:

1. Adicionado um campo boolean `true/false` na listagem de matrículas indicando se a matrícula está ativa ou não, ou seja, se a data de término é posterior à atual e a data de início inferior (utilize um campo `VIRTUAL`).

2. Listagem de alunos (`/students/users`) com filtro por nome recebendo um Query Parameter `?q=Diego`, buscando no banco usuários com esse filtro (utilizado o operador `like`). Caso o parâmetro não seja passado, retorna todos usuários;

#### Configurações base

##### Acessar o diretorio backend/Gympoint do projeto, abrir no Visual Code ou IDE de sua escolha.

##### Configurar arquivo ".env.example" com variàveis ambiente, renomear ou salvar como ".env"

##### Criar banco dados no postgres, para armazenar os dados da aplicação

##### Instalar Postbird, para auxiliar na criação do banco dados do postgres

##### Iniciarlizar os bancos de dados no Docker ou local

#### Agora execute por linha comando no terminal no diretorio projeto em "../backend/Gympoint" :

##### Instalando as dependências do projeto backend

```js
yarn install
yarn
```

##### Criando a estrutura no banco dados

```js
OBS: Com banco dados novo sem tables, no diretorio backend do projeto
yarn sequelize db:migrate
yarn sequelize db:seed:all
```

- Obs.:
- yarn sequelize db:migrate -> Cria estrutura de dados da aplicação
- yarn sequelize db:seed:all -> Cria usuário administrador para acessar aplicação
- usename: 'Administrador',
- email: 'admin@gympoint.com',
- password_hash: '123456'

##### Inicializando aplicação no Backend

```js
Obs.: em um terminal - para conexão backend
yarn dev
```

```js
Obs.: em outro terminal - para gerenciamento de filas de envio E-mails
yarn queue
```

- Obs.: Deixar executando para acesso do frontend WEB e Mobile

### Projeto WEB

##### FERRAMENTAS

##### Reactotron

##### customize-cra

##### Validaçao Yup

#### Iniciar o projeto WEB

###### Agora execute por linha comando no terminal no diretorio projeto em "../web" :

###### Instalando as dependências do projeto web

```js
yarn install
yarn
```

###### Inicializando projeto web - start (rodar projeto)

```js
yarn start
```

- Obs.: O projeto backend deve está executando para acesso do frontend WEB
- Obs.: acessar com usuário Adiministrador que foi criado no projeto Backend

### Esturtura projeto

- Sucrase + Nodemon; - OK

#### ESLint Configurado

- ESLint -Airbnb -ok

```js
* ? How would you like to use ESLint? To check syntax, find problems, and enforce code style
* ? What type of modules does your project use? JavaScript modules (import/export)
* ? Which framework does your project use? None of these
* ? Does your project use TypeScript? No
* ? Where does your code run? Node
* ? How would you like to define a style for your project? Use a popular style guide
* ? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
* ? What format do you want your config file to be in? JavaScript
* Checking peerDependencies of eslint-config-airbnb-base@latest
* The config that you've selected requires the following dependencies:
```

- Prettier - OK
- EditorConfig - OK;
- Sequelize (Utilize PostgreSQL acesso backend); - Gympoint - OK

#### Funcionalidades

- Abaixo estão descritas as funcionalidades adicionadas na aplicação.

##### 1. Autenticação

- Permita que um usuário se autentique em sua aplicação utilizando e-mail e uma senha.

- A autenticação realizada através JWT. -> jsonwebtoken -OK
- The MD5 hash for Gympointrockeseat
- Realize a validação dos dados de entrada; - schemas validadtion com YUP - OK

##### 2. Cadastro de alunos

- Permita que alunos sejam mantidos (cadastrados/atualizados) na aplicação utilizando nome, email, idade, peso e altura.

- Criado uma tabela no banco de dados chamada `students` para armazenar o cadastro de alunos.

- O cadastro de alunos só pode ser feito por administradores autenticados na aplicação.

- O aluno não pode se autenticar no sistema, ou seja, não possui senha.

#### Funcionalidades do administrador

Abaixo estão descritas as funcionalidades que você adicionadas na aplicação para administradores.

##### 1. Gestão de planos

Permita que o usuário possa cadastrar planos para matrícula de alunos, o plano deve possuir os seguintes campos:

- table = plans

- title (nome do plano);
- duration (duração em número de meses);
- price (preço mensal do plano);
- created_at;
- updated_at;

Planos pre-cadastrado como exemplo, já adicionado ao executar comandos para criar e gerar as tabelas do banco dados:

- `Start`: Plano de 1 mês por R\$129;
- `Gold`: Plano de 3 meses por R\$109/mês;
- `Diamond`: Plano de 6 meses por R\$89/mês;

- Rotas para listagem/cadastro/atualização/remoção de planos;

Obs.: Essa funcionalidade é para administradores autenticados na aplicação.

##### 2. Gestão de matrículas

Apesar do aluno estar cadastrado na plataforma, isso não significa que o mesmo tem uma matrícula ativa e que pode acessar a academia.

Nessa funcionalidade foi criado um cadastro de matrículas por aluno, a matrícula possui os campos:

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

#### Desenvolvimento dos requisitos

Criado rotas para listagem/cadastro/atualização/remocação de matrículas;

Obs.: Essa funcionalidade é para administradores autenticados na aplicação.

##### Funcionalidades do aluno

Abaixo estão descritas as funcionalidades da aplicação para alunos.

##### 1. Checkins

Quando o aluno chega na academia o mesmo realiza um check-in apenas informando seu ID de cadastro (ID do banco de dados),

- Obs.: que pode ser obtido na listagem de alunos;

Esse check-in serve para monitorar quantas vezes o usuário frequentou a academia na semana.

A tabela de `checkins` possui os campos:

- student_id (referência ao aluno);
- created_at;
- updated_at;

O usuário só pode fazer **5 checkins** dentro de um período de 7 dias corridos.

Exemplo de requisição: `POST https://gympoint.com/students/3/checkins`

Criado uma rota para listagem de todos checkins realizados por um usuário com base em seu ID de cadastro;

Exemplo de requisição: `GET https://gympoint.com/students/3/checkins`

##### 2. Pedidos de auxílio

O aluno pode criar pedidos de auxílio para a academia em relação a algum exercício, alimentação ou instrução qualquer;

A tabela `help_orders` contém os seguintes campos:

- student_id (referência ao aluno);
- question (pergunta do aluno em texto);
- answer (resposta da academia em texto);
- answer_at (data da resposta da academia);
- created_at;
- updated_at;

Rota para a academia listar todos pedidos de auxílio sem resposta;

Rota para o aluno cadastrar pedidos de auxílio apenas informando seu ID de cadastro (ID do banco de dados);

- exemplo de requisição: `POST https://gympoint.com/students/3/help-orders`

Rota para listar todos pedidos de auxílio de um usuário com base em seu ID de cadastro;

- exemplo de requisição: `GET https://gympoint.com/students/3/help-orders`

Rota para a academia responder um pedido de auxílio:

- exemplo de requisição: `POST https://gympoint.com/help-orders/1/answer`

Quando um pedido de auxílio for respondido, o aluno receber um e-mail da plataforma com a pergunta e resposta da academia;

- Envio de EMAIL -> nodemailer (Mailtrap - DEV)

- Usando FILAS para envio de EMAILs banco dados REDIS, no docker para armazer estrutura fila de envio emails, nome banco dados: redisgympoint

- Personalização email html: handlebarsjs - templating on steroids

- TRATAMENTO DE ERROS - MONITORAMENTO APLICAÇÃO -> Sentry

- A versão web do projeto Gympoint representa a visão da academia, ou seja, todas funcionalidades presentes na versão web são para administradores. As funcionalidades para o aluno serão dispostas no aplicativo mobile.

### Informações importantes

1. Alerta quando deletar qualquer registro do banco;
2. Para formatação de datas utilizado biblioteca `date-fns`;
3. Formatações de valores, formatando os dados assim que recebidos da API;
4. Cadastro/edição de planos e matrículas os inputs com fundo cinza são calculados automaticamente com base na seleção dos outros valores;
5. No cadastro/edição de matrícula é possível buscar o aluno pelo nome.
6. Os planos são buscados da API assim que a página carregar e não possui filtro.

### Opcionais

1. Adicionado paginação no front-end e back-end para todas listagens;
2. Utilizando máscaras para inputs;

### Projeto Mobile

#### Desenvolvimento somente em Android / Sistema Operacional Linux-Ubuntu 16.04LTS

##### FERRAMENTAS

##### Reactotron

##### Validaçao Yup

#### Iniciar o projeto Mobile

###### Agora execute por linha comando no terminal no diretorio projeto em "../mobile/gympoint" :

###### Instalando as dependências do projeto mobile

```js
yarn install
yarn
```

###### Criar no projeto do dispositivo mobile

- Um arquivo dentro do diretório projeto "../mobile/gympoint/android/local.properties"

```js
Obs.: Com contéudo apontando para o SDK do android - exemplo abaixo
sdk.dir = /home/seu_usuario/Android/Sdk
```

###### Instalar ADB para acesso ao dispositivo mobile

```js
sudo apt-get install adb
adb reverse tcp:8081 tcp:8081
adb devices
Obs.: adb devices -> para verificar se dispositivo mobile foi detectado
```

###### Instalando e Carregando projeto no dispositivo mobile

```js
react-native run-android
ou
yarn android
```

###### Executando projeto no dispositivo mobile

```js
yarn start
```

Obs.: O projeto backend deve está executando para acesso do frontend Mobile

#### ESLint Configurado

```js
> yarn eslint --init

* yarn run v1.21.1
* \$ /home/josuel/Projects_2019/CursosRocketSeat/CursoBootCamp/desafio-final-certificacao/projeto_certificacao_Gympoint_09/Gympoint/mobile/gympoint/node_modules/.bin/eslint --init
* ? How would you like to use ESLint? To check syntax, find problems, and enforce code style
* ? What type of modules does your project use? JavaScript modules (import/export)
* ? Which framework does your project use? React
* ? Does your project use TypeScript? No
* ? Where does your code run?
* ? How would you like to define a style for your project? Use a popular style guide
* ? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
* ? What format do you want your config file to be in? JavaScript
* Checking peerDependencies of eslint-config-airbnb@latest
* The config that you've selected requires the following dependencies:
```

A versão mobile do projeto Gympoint representa a visão do aluno, ou seja, todas funcionalidades presentes nesse projeto são para alunos.

### Opcionais

1. Adicionado scroll infinito com paginação na listagem de check-ins e pedidos de auxílio;
2. Botão voltar nas telas Answers(View detalhamento resposta) e HelpNew(Nova solicitação ajuda)
3. Botão Sair para finalizar o login
