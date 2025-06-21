FROM --platform=linux/amd64 node:alpine as builder
WORKDIR /app
COPY /*.json ./
RUN npm ci 
COPY . .
RUN  npm run build


FROM --platform=linux/amd64 node:alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist


COPY /*.json ./

RUN npm ci  --omit=dev


EXPOSE 3000


CMD [ "node" ,"./dist/main.js" ]



