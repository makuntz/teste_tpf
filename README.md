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

## Funcionamento

    Assim que o projeto é compilado com o comando acima, abre-se o navegador com a pagina incial de Login. Esse login é realizado por um admin, cadastrado previamente no banco de dados.

    Após efetuado o login, a próxima rota/pagina é onde se manipula os alunos cadastrados e seus respectivos cursos. Aqui há 3 botões:

        . "Início", onde a aplicação fica em seu estado inicial da página

        . "Cadastrar", onde é possível realizar o cadastro dos alunos e seus respectivos cursos.  Aqui, quando clicado esse botão, abre-se uma janela com campos nome, email e senha para realizar esse novo cadastro.

        . "Listar", quando clicado esse botão é trazido do banco para tela do navegador todos os alunos cadastrados, além de novos botões deletar(lixeira) e editar(lapis).

            . O botão deletar, exclui diretamente da tela e do banco de dados o aluno em questão.

            . Já o botão editar, quando clicado, abre uma nova janela, com todos os campos e seus valores previamente preenchidos, para que se possa fazer alteração dos mesmos. Para sumir essa janela, sem fazer alterações, basta clicar novamente no ícone do lápis, que ela desaparece. Clicando em 'Editar', o cadastro é alterado no banco de dados.

## Rotas

## Testes

    Para testes manuais e realização dos http requests, a autora sugere a utilização do [Postman](https://www.postman.com/).

    Veja abaixo um exemplo do POST request em http://localhost:4000/adduser, feito através do Postman.

    ![postman](https://user-images.githubusercontent.com/75498529/177631778-d3a34b81-a55e-4fd8-b575-9b4f9e397e55.png)

    ![mongo](https://user-images.githubusercontent.com/75498529/177631788-31820298-47a7-479b-b17d-d6fe3b9aa31d.png)

## Considerações

    . Acabei utilizando um database do MongoDB Atlas que eles hosteam de graça para propósitos de aprendizagem. Por esse motivo (e por não haver dados sensíveis nesse exercício) a string de acesso a url da minha database está hardcoded no código mesmo com intuito de facilitar o acesso.

    . O usuario e senha para a autenticação também estão hardcoded para facilitar (assumindo aqui que o foco seja o gerenciamento dessas etapas da API e não o valor das credenciais.)Inclui, então, um usuário "admin" que tem para login o email "tpf@gmail.com" e a senha "3585".
