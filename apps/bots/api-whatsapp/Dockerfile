FROM node:13-alpine as development

WORKDIR /app

COPY package.json package-lock.json ./
# COPY .npmrc ./
COPY .env.dev ./
# COPY tsconfig.build.json ./
# COPY tsconfig.json ./

RUN npm install
RUN npm install -g nx


EXPOSE 3001
EXPOSE 4001

COPY . .

# Set the Node environment
ARG node_env=dev
ENV NODE_ENV $node_env

CMD ["nx", "serve", "bots-api-whatsapp"]
# RUN nx --version
# RUN NODE_ENV=dev npx nx run-many --target=serve --projects=api-chat-class,bots-api-whatsapp --parallel=true
# CMD ["npm", "run", "start:api-chat-class:dev"]
# CMD ["npm", "run", "start:bots-api-whatsapp:dev"]
# CMD [ "sh", "-c", "NODE_ENV=dev nx serve api-chat-class && NODE_ENV=dev nx serve bots-api-whatsapp" ]

# CMD ["NODE_ENV=dev nx serve api-chat-class", "NODE_ENV=dev nx serve bots-api-whatsapp"]


#  npx nx run-many --target=serve --projects=api-chat-class,bots-api-whatsapp --parallel=true
