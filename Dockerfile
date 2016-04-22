# onbuild below triggers npm install and npm start
# FROM node:4.4.3-onbuild

FROM node:4.4.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

