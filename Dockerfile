# onbuild below triggers npm install and npm start
# FROM node:4.4.3-onbuild


FROM node:latest
WORKDIR /usr/src/app
RUN npm install webpack webpack-dev-server surge -g
VOLUME ["/usr/src/app"]
ENTRYPOINT npm install && npm dev