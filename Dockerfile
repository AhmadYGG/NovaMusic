FROM node:20-bookworm

WORKDIR /usr/src/app

COPY package*.json ./

ENV HUSKY=0

RUN npm install --omit=dev

COPY . .

RUN apt-get update && apt-get install -y ffmpeg

CMD ["node", "index.js"]
