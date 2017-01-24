const dgram = require('dgram');
const config = require('config');
const server = dgram.createSocket('udp4');

server.on('listening',  ()=> {
    const address = server.address();
    console.log(`UDP Server listening on ${address.address} : ${address.port}`);
});

server.on('message', (message, remote)=> {
    console.log(`${remote.address} : ${remote.port}  - ${message}`);
});

server.bind(config.get('port'), config.get('host'));
