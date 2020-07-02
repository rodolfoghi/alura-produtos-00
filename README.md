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

### Obter todos os produtos

```bash
$ curl -i -H "Accept: application/json" http://localhost:3000/produtos

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 363
ETag: W/"16b-Bhy3RKy2iI+JzAjFNvT3Lua+IxY"
Date: Fri, 26 Jun 2020 03:24:19 GMT
Connection: keep-alive

[{"codigo":"LV001","nome":"Livro Inteligência Artificial como serviço","preco":29.9},{"codigo":"LV002","nome":"Livro Ionic 4","preco":39.9},{"codigo":"LV003","nome":"Livro Acessibilidade na Web","preco":49.9},{"codigo":"LV004","nome":"Livro React Native","preco":19.9},{"codigo":"LV005","nome":"Livro Manual de sobrevivência do novo programador","preco":29.9}]
```

### Obter um produto específico

```bash
$ curl -i -H "Accept: application/json" http://localhost:3000/produtos/1

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 94
ETag: W/"5e-I3Rwb4q99h578VrStSlst5YIYfs"
Date: Fri, 26 Jun 2020 03:31:51 GMT
Connection: keep-alive

{"codigo":"LV001","nome":"Livro Inteligência Artificial como serviço","preco":29.9,"id":"1"}
```

### Incluir um produto

```bash
$ curl -i -H "Content-Type: application/json" \
--request POST \
--data '{"codigo":"LV006","nome":"Livro Angular 8 e Firebase","preco":59.9}' \
http://localhost:3000/produtos

HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 74
ETag: W/"4a-Np99ed+cxpkGpLng1evMMEzLMVM"
Date: Fri, 26 Jun 2020 03:47:17 GMT
Connection: keep-alive

{"codigo":"LV006","nome":"Livro Angular 8 e Firebase","preco":59.9,"id":6}

```

### Alterar um produto
```bash
$ curl -i -X PUT -H "Content-Type: application/json" -d '{"codigo":"LV006","nome":"Livro Angular 8 e Firebase","preco":59.9,"id":6}' http://localhost:3000/produtos/6

HTTP/1.1 200 OK
X-Powered-By: Express
Date: Fri, 26 Jun 2020 03:59:46 GMT
Connection: keep-alive
Content-Length: 0

```

### Excluir um produto

```bash
$ curl -i -X DELETE http://localhost:3000/produtos/3

HTTP/1.1 200 OK
X-Powered-By: Express
Date: Fri, 26 Jun 2020 04:04:30 GMT
Connection: keep-alive
Content-Length: 0
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
