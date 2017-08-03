FROM krishnansriram/debian_node8:1.0
EXPOSE 3000
WORKDIR /opt/projects
RUN git clone https://github.com/KrishnanSriram/DockerExpressMongo.git \
     && cd ./DockerExpressMongo/ExpressApp \
    && npm install
WORKDIR /opt/projects/DockerExpressMongo/ExpressApp

CMD [ "npm", "start" ]