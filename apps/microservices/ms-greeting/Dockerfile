FROM node:13-alpine as development
WORKDIR /app
COPY package.json package-lock.json ./
COPY .env.dev ./
RUN npm install
RUN npm install -g nx
ARG node_env=dev
ENV NODE_ENV $node_env
EXPOSE 5001
EXPOSE 6379
COPY . .
CMD ["nx", "serve", "microservices-ms-greeting"]
#  && nest start --watch
