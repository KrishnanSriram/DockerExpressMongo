FROM krishnansriram/debian_node8:1.0
EXPOSE 3000
RUN mkdir -p /opt/projects \
    && cd /opt/projects \
    && git clone https://github.com/KrishnanSriram/DockerExpressMongo.git \
    && cd /opt/projects/DockerExpressMongo/ExressApp \
    && npm install \
    && npm install -g nodemon
# WORKDIR /opt/projects/DockerExpressMongo/ExressApp

CMD cd /opt/projects/DockerExpressMongo/ExressApp; nodemon app.js