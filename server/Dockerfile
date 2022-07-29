FROM node:alpine

RUN npm install typescript --global

WORKDIR /server

COPY package*.json tsconfig.json yarn-error.log yarn.lock ./

COPY ./src ./src

COPY ./dist ./dist


RUN yarn install

EXPOSE 4000

CMD [ "yarn", "start" ]
