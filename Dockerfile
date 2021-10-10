FROM node:14
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build
ENV HOST 0.0.0.0
EXPOSE 3000
CMD [ "yarn", "start" ]
