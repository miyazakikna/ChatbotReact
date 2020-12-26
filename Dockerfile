FROM node:14-alpine
RUN npm install -g npm && \
    npm install -g firebase-tools
WORKDIR /usr/src/app
