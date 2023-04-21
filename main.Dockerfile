FROM node:19
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY src /app/src
RUN npm build
EXPOSE 8080
ARG RATINGS_SERVICE_URL
ARG LOLOMO_SERVICE_URL
CMD [ "node", "server.js" ]


