FROM nagucc/babel-starter-kit:1.2.0

ADD package.json /app/
ADD src /app/src
WORKDIR /app
RUN npm install yarn -g
RUN yarn
EXPOSE 3000

CMD npm start
