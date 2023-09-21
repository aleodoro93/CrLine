# CRline API 📖
 

Bem-vindo ao CRLine, a plataforma de E-comerce dedicada à venda de cadernos artesanais feitos à mão, onde a criatividade se une à habilidade manual.Nossa missão é oferecer aos nossos clientes cadernos únicos e feitos manualmente, que são verdadeiras obras de arte. Cada caderno em nosso catálogo é cuidadosamente confeccionado por artesãos talentosos, resultando em produtos de alta qualidade e exclusivos. Através da nossa plataforma, os amantes da escrita, da arte e da papelaria podem explorar uma variedade de designs e estilos de cadernos artesanais, tornando suas experiências de escrita e desenho ainda mais especiais

## Descrição 🖋️

Nessa primeira etapa, desenvolvemos o backend, utilizando Node.js e o framework Express.js, proporcionando uma API REST escalável e eficiente. A integração com o MongoDB, utilizando a biblioteca Mongoose, permite o armazenamento e recuperação de dados de forma otimizada. Além disso, foram implementados testes utilizando o framework Jest para garantir a qualidade do código. Para configurar o ambiente de desenvolvimento, basta clonar o repositório, instalar as dependências e iniciar o servidor.

## Tecnologias  Utilizadas 💻

Para sua aplicação rodar, será necessário as seguintes tecnologias:

* **Node**   - [Link](https://nodejs.org/pt-br/download)
* **MongoDB**   - [Link](https://www.mongodb.com/pt-br)

## Dependências de Desenvolvimento API 🎯

* **cors": "^2.8.5",** 
* **dotenv": "^16.3.1**
* **express": "^4.18.2**
* **mongoose": "^7.5.1**
* **nodemon": "^3.0.1"**
  


##  Configuração do Ambiente  ⚙️

Para configurar o ambiente de desenvolvimento, abra o terminal e siga essas etapas:

1. Clone este repositório.
   ```
    git clone https://github.com/aleodoro93/CrLine.git
   ```   

2. Entre na pasta
   ```
   cd .\CrLine\   
   ```
   
3. Instale as dependências 
   ```
    npm install 
   ```
   
4. Configure o .env para conectar com o seu MongoDB no Atlas
   
   Segue um exemplo de configuração: [link](https://github.com/motdotla/dotenv)
    ```
    USER_DB=local
    DATABSE=local
    PASSWORD=local
    CLUSTER=local    
    ```
    
   
5. Inicie o servidor.
    ```
    npm start
    ```
    
## Exemplos de Respostas

### Fazendo um Post em produtos
  
```js

/produtos/

{
  "tipoCostura": "grimorio",
  "tamanhoFolha": "A4",
  "tipoFolha": "offset",
  "quantidadeFolhas": "",
  "gramaturaFolha":"75",
  "tipoCapa": "Capa-dura",
  "tipoPauta": "lisa",
  "temNoEstoque": true,
  "quantiaNoEstoque": 6
}
```

 Resposta do Post
 - Sucesso
 
```js
{
	"Sucesso": "Sucesso no registro!"
}
```
 - Erro
 
```js
{
    "message": "Tamanho de folha inválido"
}
```

```js
{
    "message": "Tipo de costura inválido"
}
```

 ### Fazendo um Get em produtos

```js

/produtos/
```
 Resposta do Get
 - Sucesso
 
```js
[
    {
        "_id": "650a5808b9ce5395c52ceb18",
        "id_produto": 233221,
        "tipoCostura": "espiral",
        "tamanhoFolha": "A4",
        "tipoFolha": "offset",
        "quantidadeFolhas": 100,
        "gramaturaFolha": "75",
        "tipoCapa": "Capa Dura",
        "tipoPauta": "lisa",
        "temNoEstoque": true,
        "quantiaNoEstoque": 500,
        "__v": 0
    },
    {
        "_id": "650b38d19fae0741d237c557",
        "id_produto": 233221,
        "tipoCostura": "espiral",
        "tamanhoFolha": "A4",
        "tipoFolha": "offset",
        "quantidadeFolhas": 200,
        "gramaturaFolha": "75",
        "tipoCapa": "Capa Dura",
        "tipoPauta": "lisa",
        "temNoEstoque": true,
        "quantiaNoEstoque": 50,
        "__v": 0
    }
]
```
 - Erro
 
```js

    Cannot GET

```

 ### Fazendo um Update em produtos

```js

/produtos/<id produto atlas>
```
 Resposta do Update
 - Sucesso
 
```js
{
	"tipoCostura": "grimorio"
}


{
	"message": "Produto atualizado com sucesso"
}

```
 - Erro
 
```js

   {
    "message": O Id desse produto não existente"
}

```
 ### Fazendo um Delete em produtos

```js

/produtos/<id do produto>
```
 Resposta do Delete
 - Sucesso
 
```js
[
{
    "message": "Sucesso na exclusão do registro",
    "id": "650a5808b9ce5395c52ceb18"
}
]

```
 - Erro
 
```js

   {
    "Erro": "Id desse produto não existe",
    "id": "650a5808b9ce5395c52ceb18"
}

```
 ### Fazendo um Get By Id
```js

/produtos/<id do produto>
```
 Resposta do Get By Id
 - Sucesso
 
```js
[
{
    "_id": "650a9fdd37aedbfb1d84360d",
    "tipoCostura": "grimorio",
    "tamanhoFolha": "A4",
    "tipoFolha": "offset",
    "quantidadeFolhas": null,
    "gramaturaFolha": "75",
    "tipoCapa": "Monstro",
    "tipoPauta": "lisa",
    "temNoEstoque": true,
    "quantiaNoEstoque": 6,
    "__v": 0
}
]

```
 - Erro
 
```js

  {
    "message": "O id desse produto não existe",
    "id": "650a586bb9ce5395c52ceb1b"
}

```

##  Autores ✏️

* **André**   - [Github](https://github.com/aleodoro93) - [Linkedin](https://www.linkedin.com/in/andr%C3%A9-luiz-leodoro/)
* **Charlie** - [Github](https://github.com/Charlie-Pencal) - [Linkedin](https://www.linkedin.com/in/charlie-pencal/)
* **Emerson** - [Github](https://github.com/emerchagas) - [Linkedin](https://www.linkedin.com/in/emerson-chagas-041a31278/)
* **Juliane** - [Github](https://github.com/julianebueno) - [Linkedin](https://www.linkedin.com/in/julianebueno1/)
* **Leticia** - [Github](https://github.com/LeticiaANunes) - [Linkedin](https://www.linkedin.com/in/leticia-nunes-89542a184/)
