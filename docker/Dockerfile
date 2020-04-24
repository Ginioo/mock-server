# mock server service image (ms-service)
FROM ms-alpine:latest

ENV MS_PROJECT_NAME mock-server
ENV MS_VERSION 1.0.0 
ENV MS_REPO_URL https://github.com/Ginioo/$MS_PROJECT_NAME.git

RUN git clone --depth 1 --branch $MS_VERSION $MS_REPO_URL

WORKDIR $MS_PROJECT_NAME
RUN yarn install
CMD pwd && yarn start

EXPOSE 3001
