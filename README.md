# Bookstore API 📚
 <p align="justify">Projeto de encerramento do módulo 4 da Resilia Educação. O objetivo é desenvolver uma API Rest com as informações do estoque de uma livraria. </p>

<img src="https://nypem.net/wp-content/uploads/2019/07/books-header-1.jpg" />

 ---

 ## Pré-requisitos 📘
 - <a href="https://nodejs.org/en/">Node.Js</a> - v. 16.13.2
 - <a href="https://expressjs.com/pt-br/">Express</a> - v. 4.17.3
 - <a href="https://www.npmjs.com/package/sqlite3">SQLite</a> - v. 5.0.0
 - <a href="https://nodemon.io/">Nodemon</a> - v. 2.0.15
 - <a href="https://www.npmjs.com/package/supertest"> Supertest</a> - v. 6.2.2
 
 ---

 ## Iniciando da aplicação 📖

 <p>Rode os comandos a seguir no terminal ou PoweShell.</p>
 
 - Clone o repositório:
```
git clone git@github.com:vanessacreis/Bookstore-API.git
```
- Acesse a pasta:
```
cd BookstoreAPI
```
- Instale os pacotes necessários:
```
npm install
```
- Popule o banco de dados:
```
npm run populate
```
- Inicie o servidor:
```
npm run start
```
<p>Ao iniciar o projeto, o servidor será aberto em http://localhost:3000/, sendo 3000 a porta padrão. Caso necessário, a porta poderá ser alterada no arquivo server.js</p>

---
## Rotas HTTP 🗺️

### <b> GET /books </b>
Lista todos os livros da base de dados.
Exemplo da resposta esperada:

```
{
	"books": [
		{
			"ID_Books": 1,
			"Name": "O Sol é Para Todos",
			"Writer": "Harper Lee",
			"Publisher": "José Olympio",
			"Genre": "Ficção Histórica",
			"Language": "Português",
			"Pages": "350",
			"Year": "2015",
			"Price": "59.9"
		},
		{
			"ID_Books": 2,
			"Name": "A Menina que Roubava Livros",
			"Writer": "Markus Zusak",
			"Publisher": "Intrínseca",
			"Genre": "Ficção História",
			"Language": "Português",
			"Pages": "480",
			"Year": "2011",
			"Price": "49.99"
		},
    	],
	"count": 2,
	"error": false
}

```

### <b> GET /books/book/{id} </b> 
Retorna livro de acordo com o id. Campo {id} deverá ser substituído pelo id do livro escolhido.
Exemplo da resposta esperada:

```
{
	"book": [
		{
			"ID_Books": 10,
			"Name": "Joyland",
			"Writer": "Stephen King",
			"Publisher": "Suma",
			"Genre": "Suspense",
			"Language": "Portugues",
			"Pages": "240",
			"Year": "2015",
			"Price": "25.99"
		}
	],
	"error": false
}
```

### <b> GET /books/price/{id} </b> 
Retorna preço do livro de acordo com o id. Campo {id} deverá ser substituído pelo id do livro escolhido.
Exemplo da resposta esperada:

```
{
	"info": [
		{
			"Name": "Capitães da Areia",
			"Writer": "Jorge Amado",
			"Price": "40.84"
		}
	],
	"error": false
}
```
### <b> GET /books/writer/{Nome+Sobrenome} </b> 
Retorna todos os livros do autor escolhido. O nome e sobrenome do autor deverá ser inserido na url com um + ao invés do espaço. 
Exemplo da resposta esperada:

```
{
	"books": [
		{
			"ID_Books": 3,
			"Name": "Sob a Redoma",
			"Writer": "Stephen King",
			"Publisher": "Suma",
			"Genre": "Suspense",
			"Language": "Português",
			"Pages": "960",
			"Year": "2012",
			"Price": "64.9"
		},
		{
			"ID_Books": 10,
			"Name": "Joyland",
			"Writer": "Stephen King",
			"Publisher": "Suma",
			"Genre": "Suspense",
			"Language": "Portugues",
			"Pages": "240",
			"Year": "2015",
			"Price": "25.99"
		}
	],
	"count": 2,
	"error": false
}

```
### <b> POST /books </b> 
Insere um novo livro na base de dados. Campos <i>name, writer, publisher e year</i> são obrigatórios e não podem ser enviados vazios. 
Modelo do schema a ser utilizado no body.

```
{
	"name": "Claros Sinais de Loucura",
	"writer": "Karen Harrington",
	"publisher": "Intrínseca",
	"genre": "Ficção Jovem Adulto",
	"language": "Português",
	"pages": "256",
	"year": "2014",
	"price": "24,90"
}
```
Exemplo da resposta esperada:
```
{
	"message": "Book Claros Sinais de Loucura was registered successfully",
	"error": false
}
```

### <b> PUT /books/book/{id} </b>
Atualiza um livro na base de dados. Campo {id} deverá ser substituído pelo id do livro a ser atualizado.
Modelo do schema a ser utilizado no body:
```
{
	"name": "Mar Sem Estrelas",
	"writer": "Erin Morgenstern",
	"publisher": "Morro Branco",
	"genre": "Fantasia",
	"language": "Português",
	"year": "2021",
	"pages": "544",
	"price": "60.99"
}
```
Exemplo da resposta esperada:
```
{
	"message": "Book Mar Sem Estrelas was updated.",
	"error": false
}
```

### <b> DELETE /books/book/{id} </b>
Deleta o livro escolhido da base de dados. 
Exemplo da resposta esperada:
```
{
	"message": "Book id: 8 was deleted.",
	"error": false
}
```
---

## Testes 📕
Este projeto conta com um arquivo de testes para conferir o funcionamento das rotas da API. Para utilizá-lo, é necessário que o banco de dados esteja populado. Os testes podem ser rodados com o comando

```
npm run test
```

