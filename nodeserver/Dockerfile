#
# This Dockerfile was created largely from this guide: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
#

FROM node:14.14-alpine
# All node images contain pre-installed versions of node, npm, and yarn.
# See: https://github.com/nodejs/docker-node#image-variants

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

RUN yarn install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /usr/src/app/

EXPOSE 8000
CMD [ "node", "server.js" ]
