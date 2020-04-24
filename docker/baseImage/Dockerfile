# mock server base image (ms-alpine)
FROM alpine:latest

ENV HOME /root
WORKDIR $HOME

RUN apk update && apk add vim zsh

RUN apk add git openssl yarn

# Install oh-my-zsh (Optional)
RUN sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

# Generate a self-signed certification for development
ENV ENV dev
WORKDIR $HOME/self_signed_cert/$ENV
RUN openssl genrsa -out ca.key 4096
RUN openssl req -new -key ca.key -out ca.csr -subj "/C=TW/ST=Taiwan/L=Taipei/O=DEV/OU=IT"
RUN openssl x509 -req -days 365 -in ca.csr -signkey ca.key -out ca.crt
WORKDIR $HOME

CMD zsh
