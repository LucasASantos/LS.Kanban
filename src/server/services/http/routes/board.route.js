const server = require('../../start-service');
const controller = require('../controller/board.controller')

server.route({
    method: 'GET',
    path: '/boards',
    handler: async (request, h) =>  controller.getboards()
});

server.route({
    method: 'GET',
    path: '/boards/{id}',
    handler: async (request, h) =>  controller.getBoardById(request.params.id)
});

server.route({
    method: 'POST',
    path: '/boards',
    handler: async (request, h) => {
        const card = request.payload;

        controller.newBoard(card);

        return 'Quadro criado com sucesso'
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
});