# izi-app

## Descrição
Este é um projeto [Nest.js](https://nestjs.com/) desenvolvido com TypeScript. O objetivo desta aplicação é criar uma lista de usuário e lista de tarefas deste usuário. CRUD completo.
## Scripts

### `npm run build`

Compila o código TypeScript para JavaScript.

### `npm run format`

Formata o código usando o Prettier.

### `npm start`

Inicia o servidor Nest.js em modo de produção e executa os comandos necessários para gerar os arquivos do Prisma e atualizar o banco de dados.

### `npm run start:dev`

Inicia o servidor Nest.js em modo de desenvolvimento com watch mode e executa os comandos necessários para gerar os arquivos do Prisma e atualizar o banco de dados.

### `npm run start:debug`

Inicia o servidor Nest.js em modo de depuração com watch mode.

### `npm run start:prod`

Inicia o servidor Nest.js em modo de produção.

### `npm run lint`

Executa o ESLint para verificar e corrigir problemas de linting no código.

### `npm test`

Executa os testes usando Jest.

### `npm run test:watch`

Executa os testes em modo de observação.

### `npm run test:cov`

Executa os testes e gera um relatório de cobertura de código.

### `npm run test:debug`

Executa os testes em modo de depuração.

### `npm run test:e2e`

Executa testes de integração end-to-end.

## Dependências Principais

- `@nestjs/common`: Módulo principal do Nest.js.
- `@nestjs/config`: Módulo para configurações.
- `@nestjs/core`: Módulo principal do Nest.js.
- `@nestjs/jwt`: Suporte JWT para Nest.js.
- `@nestjs/platform-express`: Módulo para integração com Express.
- `@nestjs/swagger`: Integração com Swagger para documentação da API.
- `@prisma/client`: Cliente Prisma para interagir com o banco de dados.
- `bcrypt`: Biblioteca para hash de senhas.
- `dotenv`: Carrega variáveis de ambiente a partir de um arquivo `.env`.
- `rxjs`: Biblioteca para programação reativa.

## Dependências de Desenvolvimento

- `@nestjs/cli`: CLI para Nest.js.
- `@nestjs/schematics`: Schematics para Nest.js.
- `@nestjs/testing`: Módulo de teste para Nest.js.
- `@types/express`: Tipos para Express.
- `@types/jest`: Tipos para Jest.
- `@types/node`: Tipos para Node.js.
- `@types/supertest`: Tipos para Supertest.
- `@typescript-eslint/eslint-plugin`: Plugin ESLint para TypeScript.
- `@typescript-eslint/parser`: Parser ESLint para TypeScript.
- `eslint`: Linter para JavaScript/TypeScript.
- `eslint-config-prettier`: Configuração do ESLint para Prettier.
- `eslint-plugin-prettier`: Plugin ESLint para Prettier.
- `jest`: Framework de teste.
- `prettier`: Ferramenta de formatação de código.
- `prisma`: ORM para banco de dados.
- `source-map-support`: Suporte a sourcemaps para Node.js.
- `supertest`: Biblioteca para testes HTTP.
- `ts-jest`: Adaptador Jest para TypeScript.
- `ts-loader`: Loader TypeScript para Webpack.
- `ts-node`: Executa arquivos TypeScript diretamente.
- `tsconfig-paths`: Suporte para caminhos de importação baseados em `tsconfig.json`.
- `typescript`: Linguagem de programação TypeScript.

## Configuração de Testes

O Jest é configurado para testar arquivos `.ts` dentro da pasta `src`, utilizando o `ts-jest` para transpilar o código TypeScript para JavaScript durante os testes. A cobertura de código é gerada na pasta `coverage`.

