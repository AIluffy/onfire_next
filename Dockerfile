FROM node:10
WORKDIR /app
COPY . .

RUN yarn install
RUN yarn build

EXPOSE 36667
CMD ["yarn", "start"]
