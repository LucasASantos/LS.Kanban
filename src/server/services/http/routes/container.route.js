const server = require('../../start-service');
const controller = require('../controller/container.controller');

server.route({
    method: 'GET',
    path: '/boards/{boardId}/containers',
    handler: async (request, h) =>  controller.getContainersByBoard(request.params.boardId)
});

server.route({
    method: 'POST',
    path: '/boards/{boardId}/containers',
    handler: async (request, h) => {
        const container = request.payload;

        container.BoardId = request.params.boardId;

        controller.newContainer(container);

        return 'Container criado com sucesso'
    }
});