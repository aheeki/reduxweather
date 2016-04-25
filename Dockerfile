FROM node:latest
WORKDIR /usr/src/app

RUN npm install webpack webpack-dev-server surge -g
ENTRYPOINT npm install && webpack-dev-server --config webpack.config.js --watch --progress --colors --hot --inline -d --host 0.0.0.0 --port 80 --content-base ./
