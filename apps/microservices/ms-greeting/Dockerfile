FROM node:13-alpine as development
WORKDIR /app
COPY package.json package-lock.json ./
COPY .env.dev ./
RUN npm install
RUN npm install -g nx
EXPOSE 6379
EXPOSE 6380
COPY . .
# Set the Node environment
ARG node_env=dev
ENV NODE_ENV $node_env
CMD ["nx", "serve", "microservices-ms-greeting"]


#  && nest start --watch
