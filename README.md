# Desafio Técnico TPF

Esse projeto contém a implementação do desafio técnico da TPF. Trata-se de um sistema onde um admin pode ter o controle de seus alunos/curso.

## Requisitos e Ferramentas

Esse projeto utiliza os seguintes:

    .NodeJS
    .MongoDB
    .Express
    .React

Somente é necessário ter o NodeJS pré instalado para a execução do projeto. Outras dependencias são gerenciadas pelo gerenciador de pacotes NPM.

## Execução

Após a instalar o NodeJS:

1. Clone este repositório

   git clone https://github.com/makuntz/teste_tpf.git

   Certificar-se de estar clonando a branch Main

2. Instale as dependencias do projeto na pasta backend
   Na pasta raíz, digite cd backend
   `npm install`

3. Instale as dependencias do projeto na pasta frontend
   Na pasta raíz, digite cd frontend
   `npm install`

4. Nessas mesmas pastas (em dois terminais), rode o comando abaixo
   <npm start>

Esse comando na pasta /frontend compila o projeto iniciando o CLIENTE em http://localhost:3000. O mesmo comando na pasta /backend inicia o server em http://localhost:4000. É necessário rodar o frontend e o backend para o funcionamento do projeto completo

## Funcionamento

Assim que o projeto é compilado com o comando acima, abre-se o navegador com a pagina incial de Login. Esse login é realizado por um admin, cadastrado previamente no banco de dados e, é o único usuário autenticado e autorizado a fazer as operações. Email e senha estão sendo passadas mais abaixo, nas ##Considerações.

Após efetuado o login, a próxima rota/pagina é onde se manipula os alunos cadastrados e seus respectivos cursos. Aqui há 3 botões:

- "Início": a aplicação fica em seu estado inicial da página

- "Cadastrar": realiza o cadastro dos alunos e seus respectivos cursos. Quando clicado, o botão abre uma janela com campos nome, email e senha para realizar novo cadastro

- "Listar": obtém todos os alunos cadastrados no banco de dados e os lista na tela do navegador com a possibilidade de deletar e editar cada um. Veja os ícones de Editar (ícone lápis) e Deletar (ícone lixeira) em cada item de usuário

- Clicando no ícone da Lixeira - Deletar: exclui diretamente da tela e do banco de dados o aluno em questão.

- Clicando no ícone de Lápis - abre uma nova janela, com todos os campos e seus valores previamente preenchidos, para que se possa fazer alteração dos mesmos. Para sumir essa janela, sem fazer alterações, basta clicar novamente no ícone do lápis, que ela desaparece. Clicando em 'Editar', o cadastro é alterado no banco de dados

## Rotas e endpoints

Os endpoints disponíveis para frontend são os seguintes:

- "/" --> pagina inicial (pagina de login)
- "/dashboard" --> pagina do dashboard, onde se encontra todas as outras funcionalidaes da aplicação

Os endpoints disponíveis no backend são os seguintes:

.POST /login --> loga o admin
.POST /adduser --> adiciona aluno no banco de dados (Create)
.PUT /edituser/:id --> edita o cadastro do aluno no banco de dados (Update)
.GET /listuser --> lê todos os alunos cadastrados no banco de dados (Read)
.DELETE /deleteuser/:id --> exclui um aluno já cadastrado no banco de dados (Delete)

## Testes

Para testes manuais e realização dos http requests, a autora sugere a utilização do [Postman](https://www.postman.com/).

Veja abaixo um exemplo do POST request em http://localhost:4000/adduser, feito através do Postman.

Teste no Postman:

![postman](https://user-images.githubusercontent.com/75498529/177631778-d3a34b81-a55e-4fd8-b575-9b4f9e397e55.png)

Resultado no Banco de Dados:

![mongo](https://user-images.githubusercontent.com/75498529/177631788-31820298-47a7-479b-b17d-d6fe3b9aa31d.png)

## Considerações

. Acabei utilizando um database do MongoDB Atlas que eles hosteam de graça para propósitos de aprendizagem. Por esse motivo (e por não haver dados sensíveis nesse exercício) a string de acesso a url da minha database está hardcoded no código mesmo com intuito de facilitar o acesso.

. O usuario e senha para a autenticação também estão hardcoded para facilitar (assumindo aqui que o foco seja o gerenciamento dessas etapas da API e não o valor das credenciais). Inclui, então, um usuário "admin" que tem para login o email "tpf@gmail.com" e a senha "3585".

## Próximos passos

1. Realizar testes automatizados
2. Criar suporte a container para a aplicação.
