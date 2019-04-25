FROM node:latest
WORKDIR /home
COPY . .
CMD tail -f /dev/null