FROM node:6

RUN apt-get update && \
    apt-get install -y build-essential

WORKDIR /app
COPY . /app

CMD npm i && npm run dev
