# Lanchonete da \<DB\>:
## INSTRUÇÕES E INFORMAÇÕES:

### BACK-END:
#### COMO INSTALAR:

- Clone o repositório do GitHub numa pasta de preferência.
- Abra o CMD ou PowerShell no diretório escolhido e digite:
```bash
$    git clone https://github.com/Eivrens/desafio-everton-dias.git
```
- Após finalizado acesse a pasta recém baixada `desafio-everton-dias` ou ainda com o CMD aberto, digite:
```bash
$    cd \desafio-everton-dias\src
```
- Dentro do diretório src do projeto execute os seguintes comandos para instalar as dependências do Node.js:
```bash
$    npm install
```
- Por fim, o projeto foi realizado com ORM, ou seja, possui um banco de dados simples para guardar informações iniciais e futuras. Então, execute o comando para executar o client do ORM:
```bash
$    npx prisma generate
```
- E Após a seguinte mensagem, já pode ser executado: `Generated Prisma Client (5.1.1 | library)...`.



#### COMO EXECUTAR:

- Ainda no CMD, Windows ou IDE, no diretório `...\desafio-everton-dias\src`, execute o comando:
```bash
$    npm start
```
- Pronto! Projeto em execução. Recomendo expandir a página de console pois toda interação é no mesmo.



### BANCO DE DADOS:
Optei pelo ORM mais simples, completo, intuitivo que conheço e que é compatível com SQLite, devido ao tamanho ainda pequeno do projeto. Segue algumas interações:
- O banco de dados tem uma interface gerenciável, em que pode alterar valores, adicionar, remover, visualizar. Um verdadeiro CRUD. Para acessar, recomendo abrir um novo terminal na scr do backend e digitar:
```bash
$    npx prisma studio
```
- Os diretórios relevantes do banco de dados no projeto:

    Migrations: `...\desafio-everton-dias\src\prisma\migrations`.

    Schemas/Models: `...\desafio-everton-dias\src\prisma\schema.prisma`.

    Database: `...\desafio-everton-dias\src\database\database.db`.

### FRONT-END:
Ainda não tá nem perto de estar finalizado. Porém todo escopo e praparação de protótipos, logo, icones, paleta de cores foram pensados e inspirados na <db> e em seu [site](https://db.tec.br). Será muito interessante e divertido progredir com o frontend como projeto pessoal, até porque foi minha primeira investida com React.js.

#### COMO EXECUTAR:
- Instale as dependências Node.js do Frontend
- Vá ao diretório scr da pasta front e execute o `$ npm i`.
- Com o backend rodando, acesse a porta local indicada.

##### OBS.: Recomendo ir para a branch do repositório, no terminal digite: `git checkout fullstack`, nela vai ter as dependências e adiante, só seguir com a preparação para executar.

Como citado, está bem cru, porém promissor. [Segue o link](https://drive.google.com/drive/folders/1tBJNOLPkkfEaRwQpHWtbmSs41HCkBBRf?usp=sharing) do logo (inpiração em comida e na \<db\>.

###### Qualquer coisa estou a disposição! Abraços!

# DEPENDENCIAS:
## BACKEND e DATABASE:
- [Node.js](https://nodejs.org/en/docs): `20.5.0`
- [@prisma/client](https://www.prisma.io/docs): `5.1.1`
- [express](https://www.npmjs.com/package/express): `4.18.2`
- [Nodemon](https://www.npmjs.com/package/nodemon): `3.0.1`

## FRONTEND:
- [React.js](https://legacy.reactjs.org/docs/getting-started.html): `18.1.0`
- [React-Icons](https://react-icons.github.io/react-icons/): `4.10.1`
- [Axios](https://axios-http.com/docs/intro): `1.4.0`
