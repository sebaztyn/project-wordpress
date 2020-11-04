FROM node:alpine

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

FROM mhart/alpine-node

WORKDIR /app

COPY package.json .

RUN npm install --production --force

COPY --from=0 /app/src/dist .
COPY --from=0 /app/src/deploy.js .

EXPOSE 9000

CMD ["node", "deploy.js"]






# CMD ["yarn", "start"]
