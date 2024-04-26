FROM node:21-alpine3.18
WORKDIR /app
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm -g install -u npm
RUN npm install
ENTRYPOINT [ "npm", "start" ]