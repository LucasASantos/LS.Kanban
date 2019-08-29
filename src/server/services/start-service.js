'use strict';

const Hapi = require('@hapi/hapi');
const Nes = require('@hapi/nes');

 
const server = Hapi.server({
    port: process.env.PORT || 8000,
    host: 'localhost'
});

const init = async () => {
    await server.register(Nes);

    await server.start();

    
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

module.exports = server;

require('./http/routes/board.route')
require('./http/routes/container.route')
require('./http/routes/card.route')



