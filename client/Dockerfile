# build client
FROM node:16 as build-client

WORKDIR /client
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

ARG SERVER_API_URL
ENV SERVER_API_URL=$SERVER_API_URL

RUN yarn build

# copy to nginx
FROM nginx:1.20.1-alpine

COPY --from=build-client /client/build /usr/share/nginx/html
EXPOSE $NGINX_PORT

CMD nginx -g 'daemon off;'