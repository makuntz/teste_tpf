# Desafio Técnico TPF

Esse projeto contém a implementação do desafio técnico da TPF. Trata-se de um sistema onde um admin pode ter o controle de seus alunos/curso.

## Requisitos e Ferramentas

Esse projeto utiliza os seguintes:

    .NodeJS
    .MongDB
    .Express
    .React
    .
    .

Somente é necessário ter o NodeJs pré instalado para a execução do projeto. Outras dependencias são gerenciadas pelo gerenciador de pacotes NPM.

## Execução

Após a instalar o NodeJS:

    1. Clone este repositório
    https://github.com/makuntz/teste_tpf.git

    2. Instale as dependencias do projeto na pasta backend
    npm install

    3. Instale as dependencias do projeto na pasta frontend
    npm install

    4. Nessas mesmas pastas (em dois terminais), rode o comando abaixo
    npm start

    Esse comando compila o projeto, iniciando o server em http://localhost:3000, para o frontend e, o mesmo comando inicia o server em http://localhost:4000, para o frontend. É necessário rodar os dois servidores para o funcionamento do projeto completo.

## Testes

    Para testes manuais e realização dos http requests, a autora sugere a utilização do [Postman](https://www.postman.com/).

    Veja abaixo um exemplo do POST request em http://localhost:4000/adduser, feito através do Postman.

    -->> ACRESCENTAR AS IMAGENS

## Considerações

    . Acabei utilizando um database do MongoDB Atlas que eles hosteam de graça para propósitos de aprendizagem. Por esse motivo (e por não haver dados sensíveis nesse exercício) a string de acesso a url da minha database está hardcoded no código mesmo com intuito de facilitar o acesso.

    . O usuario e senha para a autenticação também estão hardcoded para facilitar (assumindo aqui que o foco seja o gerenciamento dessas etapas da API e não o valor das credenciais.)Inclui, então, um usuário "admin" que tem para login o email "tpf@gmail.com" e a senha "3585".
