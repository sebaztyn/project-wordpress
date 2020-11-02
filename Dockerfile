FROM node:alpine

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN yarn

COPY . .

EXPOSE 8000

CMD ["yarn", "start"]
