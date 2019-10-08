# Semana OmniStack 9.0
Sistema desenvolvido para a Semana OmniStack 9.0.

## User Guide

### Get Started

#### Backend:
- `yarn add express` ou `npm install express`: adiciona a dependência *Express* ao projeto.
- `yarn add nodemon -D` ou `npm install nodemon -D`: adiciona a dependência *Nodemon* apenas para a versão de desenvolvimento do projeto (`-D`).
- `yarn add mongoose` ou `npm install mongoose`: biblioteca que facilita trabalhar com os dados no MongoDB.
- `yarn add multer` ou `npm install multer`: lida com formatos Multipart Form Data (upload de arquivos, etc).
- `yarn add socket.io`: abstrai funcionalidades do protocolo WebSockets implantado pelo node para realizar chamadas em tempo real.
- `node src/server.js` ou `yarn dev`: roda o arquivo `server.js` no servidor local, disponibilizando chamadas à API.

#### Frontend:
- `yarn add axios` ou `npm install axios`: biblioteca que permite realizar chamadas à API.
- `yarn add cors` ou `npm install cors`: biblioteca que gerencia os endereços que podem consumir a API.
- `yarn add react-router-dom` ou `npm install react-router-dom`: biblioteca de rotas mais famosa no ReactJS.
- `yarn add socket.io-client`: instala as dependências que vão consumir o backend das WebSockets.
- `yarn start` ou `npm start`: executado no diretório `frontend` (onde o projeto ReactJS foi criado) para executá-lo.

#### Mobile:
- `yarn add axios` ou `npm install axios`: biblioteca que permite realizar chamadas à API.
- `yarn add react-navigation` ou `npm install react-navigation`: biblioteca mais utilizada para gerenciar as rotas no React Native.
- `expo install react-native-gesture-handler react-native-reanimated`: bibliotecas para lidar com gestos e animações dentro do Expo.
- `yarn add socket.io-client`: instala as dependências que vão consumir o backend das WebSockets.
- `yarn start` ou `npm start` ou `expo start`: executado no diretório `mobile` (onde o projeto React Native foi criado) para executá-lo.

## Overview

### Commands

#### Backend:
- `yarn init -y` ou `npm init -y`: cria o arquivo `package.json` com as configurações do projeto. Esse arquivo mantém as dependências instaladas no projeto.

#### Frontend:
- `yarn create react-app frontend` ou `npx create-react-app frontend`: cria um novo projeto React em um diretório chamado `frontend`.

#### Mobile:
- `npm install -g expo-cli`: instala o expo, que facilita na construção da aplicação (porém, não possui todas as funcionalidades nativas do Android/iOS).
- `expo init mobile`: cria um projeto React Native com o nome 'mobile' utilizando a biblioteca Expo.

### Shortcuts:
- `Ctrl` + `'`: abre o terminal do VSCode.
- `Ctrl` + `D`: edita palavras iguais.

### Others:
- `portquiz.net:27017`: site que verifica se a porta 27017 (padrão node) está aberta.
