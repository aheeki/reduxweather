# onbuild below triggers npm install and npm start
# FROM node:4.4.3-onbuild


FROM node:latest

WORKDIR /usr/src/app

RUN npm install webpack webpack-dev-server surge -g

VOLUME ["/usr/src/app"]

EXPOSE 80

ENTRYPOINT npm install && webpack-dev-server --config webpack.config.dev.js --watch --progress --colors --hot --inline -d --host 0.0.0.0 --port 80 --content-base ./