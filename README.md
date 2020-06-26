# Minha primeira API com [Nest](https://nestjs.com/)

## Descrição

A entidade Produtos contém tudo o que é necessário para gerenciar os produtos.

## Estrutura

| Campo   | Tipo   | Descrição                       |
| ------- | ------ | ------------------------------- |
| id      | Number | Identificador único             |
| codigo  | String | Código de referência do produto |
| nome    | String | Nome do produto                 |
| preco   | Number | Nome do produto                 |


## Consumido

### Home
```bash
$ curl -i -H "Accept: application/json" http://localhost:3000

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 11
ETag: W/"b-sYHrBZDBpkZ8XKhwxj3ohMNWSjA"
Date: Fri, 26 Jun 2020 03:01:35 GMT
Connection: keep-alive

Olá Alura!
```

## Instalação

```bash
$ npm install
```

## Executando a aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Entre em contato

- Autor - [Rodolfo Ghiggi](https://rodolfoghi.github.io/)
- Twitter - [@GhiggiRodolfo](https://twitter.com/GhiggiRodolfo)

## Licença

  [MIT licensed](LICENSE).
