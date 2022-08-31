FROM node:16-slim

WORKDIR /user/src/app

COPY . .

RUN npm install

ENTRYPOINT [ "bash" ]