FROM node:latest
WORKDIR /home
ADD . /home
RUN npm install -g http-server
RUN npm install
CMD npm start