# ToDo List API

Desafio final do módulo **Arquitetura de Software e Ágil I** do curso de Web Full Stack da Let's Code.

Squad: [AlexandreAkira Enjiu](https://github.com/Alexandre-Akira), [Leandro Vendemiatto Antunes](https://github.com/antuneslv), [Guilherme Pereira de Oliveira](https://github.com/Gui-P-Oliveira) e [Tiago Castelfranchi](https://github.com/tiagocastelfranchi).

Esse projeto consiste na criação de uma API Back-End utilizando na prática os conceitos aprendidos durante este módulo.

Nele aplicamos:
  - Metodologia Ágil Kanban
  - Arquitura MVC
  - Padrão do repositório baseado em Trunk based 

Nesta API você consegue:
- Criar um usuário.
- Fazer o login na aplicação.
 
  Caso esteja logado:
  - Buscar seu usuário.
  - Atualizar seu usuário.
  - Atualizar seu usuário.
  - Apagar seu usuário.

  - Criar um ToDo.
  - Buscar um ToDo.
  - Buscar todos os seus ToDos.
  - Editar seu ToDo.
  - Apagar seu ToDo.

A aplicação foi desenvolvida em **TypeScript e JavaScript** e utiliza **PostgreSQL** como banco de dados, também utiliza as seguintes bibliotecas:

- Express
- Sequelize
- Bcrypt
- Jsonwebtoken
- Dotenv
- Nodemon

# Quick Start

## Instalando as dependências

```
npm i
```

## Iniciando o Projeto

Após instalar as dependências, configure as variáveis de ambiente e utilize o comando abaixo para iniciar a aplicação.

```
npm run dev
```

## Rodando as Migrations

Criar migration:

```
npx sequelize-cli db:migrate
```

Desfazer a migration:

```
npx sequelize-cli db:migrate:undo
```
