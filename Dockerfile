FROM node:16-alpine

MAINTAINER Taras Mysiv

RUN apk add bash

RUN mkdir -p /app
COPY ./wait-for-it.sh /
RUN chmod +x /wait-for-it.sh

WORKDIR /app

COPY ./server/ .
RUN npm install && npm cache clean --force
RUN npm run build
