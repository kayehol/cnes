# CNES - Cadastro Nacional de Estabelecimentos de Saúde

O Cadastro Nacional de Estabelecimentos de Saúde (CNES)
é o sistema de informação oficial de cadastramento de
informações de todos os estabelecimentos de saúde no país,
no tocante à realidade da capacidade instalada e mão-de-obra
assistencial, independentemente de sua natureza jurídica
(públicos ou privados) ou de integrarem o SUS.

## Instruções

### Usando proxy
É necessário usar uma API de proxy para chamar a API oficial do CNES,
pois ela não permite chamada CORS.

### 1 - Rodando o proxy
- Clone o repositório https://github.com/kayehol/cnes-proxy
- Instale as dependências com `npm install`
- Rode o projeto localmente com `node app.js`

### 2 - Rodando esta aplicação
- Clone este repositório
- Instale as dependências com `npm install`
- Rode o projeto localmente com `ng serve`
- Acesse a aplicação em `localhost:4200`

### Usando extensão Cross Domain - CORS
- Instale via chrome web store
- Insira a URL
- Comente a linha 10 e descomente a linha 9 no arquivo `unit.service.ts`
  para chamar a API do CNES diretamente

