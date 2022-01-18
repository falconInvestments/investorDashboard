FROM node:latest

WORKDIR /

COPY package.json ./
COPY package-lock.json ./
COPY . .

RUN npm install

EXPOSE 8000

