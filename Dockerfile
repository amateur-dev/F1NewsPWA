FROM node:latest
WORKDIR /home
ADD . /home
RUN npm install -g http-server
RUN npm install
CMD http-server -a 0.0.0.0 -p 8000 -c-1