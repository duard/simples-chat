FROM node:13-alpine as development
WORKDIR app
COPY package.json package-lock.json ./
COPY .env.dev ./
RUN npm install
RUN npm install -g nx
ARG node_env=dev
ENV NODE_ENV $node_env
EXPOSE 5001
EXPOSE 4001
COPY . .
CMD ["nx", "serve", "bots-api-whatsapp"]
#  && nest start --watch
