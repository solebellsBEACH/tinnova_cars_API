# Tinnova Cars

## Instruções para rodar o projeto

###Requisitos para rodar a aplicação
##### Você precisará  ter instalado em sua máquina o Docker,  Node JS, Yarn e o NPM

###Passos parar rodar a Aplicação
- `docker run -p 5432:5432 -e POSTGRES_PASSWORD=docker postgres`
- `yarn`
- `node ace migration:run`
- `node ace db:seed`
- `yarn dev`
####Pronto, seu backEnd ja deverá estar funcionando
