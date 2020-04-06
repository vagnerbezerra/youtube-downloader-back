# YouTube Downloader Back-End

Aplicação Back-end de gerenciamento de downloads de Videos do YouTube.

1. [Requisitos](#1-requisitos)
2. [Instalação](#2-instalação)
3. [Acesso](#3-acesso)

## 1. Requisitos

- Node >= 12.16.1
- NPM >= 6.13.4
- Yarn* >= 1.22.0
- PostgreSQL >= 12.2
- Redis >= 5.0.8

> * Uso opcional.


## 2. Instalação

**2.1.** Instalação das dependências do projeto com Npm ou Yarn:

    npm install
	
    ou
	
    yarn install


**2.2.** Crie um banco de dados no PostgreSQL.

> Sugestão de nome: **youtube_downloader**



**2.3.** Faça uma cópia do arquivo `.env.example` e renomeie para `.env` com os dados da porta da aplicação e as conexões com o Postgres e Redis:

    PORT=3000
	
	REDIS_URL='127.0.0.1'
    REDIS_PORT='6379'
    
    DB_HOST='127.0.0.1'
    DB_NAME='youtube_downloader'
    DB_USERNAME='postgres'
    DB_PASSWORD='123456'
    DB_PORT='5432'


**2.4.** Criação das tabelas e inserção dos dados no banco de dados Postgres:

    npx sequelize-cli db:migrate
	

## 3. Acesso

> Caso a instalação tenha sido realizada em um host local, troque o domínio por **localhost** ou **127.0.0.1**.

**3.1.** Inicie a aplicação:

    npm start
	
	ou
	
	yarn start

> **URL:** http://localhost:3000/