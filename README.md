# NLW Rocketseat - Projeto de Perguntas e Respostas

Este projeto foi desenvolvido durante o curso da Rocketseat, utilizando uma arquitetura moderna com backend em Node.js + Fastify e frontend em React + Vite. O objetivo é criar uma aplicação de perguntas e respostas, com gerenciamento de salas e questões.

## Tecnologias Utilizadas

- **Backend:** Node.js, Fastify, Drizzle ORM, PostgreSQL
- **Frontend:** React, Vite
- **Outros:** TypeScript, Zod, Docker, Biome, Drizzle Kit

## Estrutura do Projeto

- `server/`: Backend (API REST, banco de dados, seed, rotas)
- `web/`: Frontend (interface React, páginas, componentes)
- `docker/`: Scripts para inicialização do banco de dados

## Etapas para Execução

### 1. Clonando o Projeto

```sh
git clone <url-do-repositorio>
cd <diretorio-do-projeto>
```

### 2. Configuração das Variáveis de Ambiente

#### Backend (`server/.env`)

Crie um arquivo `.env` baseado no `.env.example`:

```sh
cp server/.env.example server/.env
```

Preencha as variáveis:

- `PORT`: Porta da API (ex: 3333)
- `DATABASE_URL`: URL de conexão do PostgreSQL (ex: `postgresql://usuario:senha@localhost:5432/nlw`)
- `GEMINI_API_KEY`: Chave da API do Gemini

#### Frontend

Não há variáveis obrigatórias no frontend por padrão, mas caso precise, configure em `web/.env`.

### 3. Subindo o Banco de Dados com Docker

No diretório `server/`, execute:

```sh
docker-compose up -d
```

### 4. Instalando Dependências

```sh
pnpm install
```

Execute em ambos os diretórios `server/` e `web/`.

### 5. Migrando e Populando o Banco

No diretório `server/`:

```sh
pnpm run db:generate
pnpm run db:migrate
pnpm run db:seed
```

### 6. Executando o Backend

```sh
pnpm run dev
```

### 7. Executando o Frontend

No diretório `web/`:

```sh
pnpm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) para visualizar a aplicação.

## Arquitetura

- **Backend:** API RESTful, rotas separadas por contexto (`rooms`, `questions`), validação com Zod, integração com PostgreSQL via Drizzle ORM.
- **Frontend:** SPA React, organização por componentes, páginas e hooks, integração com API via HTTP.

## Observações

- O projeto utiliza TypeScript em toda a stack.
-
