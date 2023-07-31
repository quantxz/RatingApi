FROM node:alpine

WORKDIR /user/app

COPY package*.json ./
RUN npm install
RUN npm i --save-dev @types/jsonwebtoken

COPY . .

EXPOSE 6567

CMD ["npm", "start"]