FROM node:14.7.0

RUN mkdir -p /home/node/charesapi/node_modules && chown -R node:node /home/node/charesapi

WORKDIR /home/node/charesapi

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 4000

CMD npm start


