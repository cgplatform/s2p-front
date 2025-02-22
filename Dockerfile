FROM node:14.17.0 as s2p-front

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=s2p-front app/dist /usr/share/nginx/html
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf