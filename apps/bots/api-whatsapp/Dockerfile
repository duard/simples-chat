FROM node:13-alpine as development

WORKDIR /app

COPY package.json package-lock.json ./
# COPY .npmrc ./
COPY .env.dev ./
# COPY tsconfig.build.json ./
# COPY tsconfig.json ./

RUN npm install
RUN npm install -g nx


EXPOSE 4001

COPY . .

# Set the Node environment
ARG node_env=dev
ENV NODE_ENV $node_env

CMD ["nx", "serve", "bots-api-whatsapp"]
