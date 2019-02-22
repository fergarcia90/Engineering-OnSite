FROM node:8-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install config && npm install pg && npm install express && npm install request-promise && npm install request
EXPOSE 8085 8080
CMD ["node", "src/index.js"]
