FROM node:13-alpine as development

WORKDIR /app

COPY package.json package-lock.json ./
# COPY .npmrc ./
COPY .env.dev ./
# COPY tsconfig.build.json ./
# COPY tsconfig.json ./

RUN npm install

EXPOSE 3001 4001

COPY . .
RUN echo "Build environment: ${environment}"


CMD ["npm", "run", "start"]
