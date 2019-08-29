const ContainerService = require('../../../domain/container.domain-service');

getContainersByBoard=async (boardId)=>{
    return await ContainerService.getAllContainersByBoard(boardId);
}

newContainer= async (container) =>{
    await ContainerService.createNewContainer(container)
}


module.exports ={
    getContainersByBoard,
    newContainer
}