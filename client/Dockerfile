FROM node:14.19 as todo-app-build

RUN npm install typescript --global

WORKDIR /client

COPY package.json yarn.lock tsconfig.json README.md ./

RUN yarn upgrade && yarn

COPY ./public ./public

COPY ./src ./src

RUN yarn build

FROM nginx:latest

COPY --from=todo-app-build /client/build/ /usr/share/nginx/html

EXPOSE 80
