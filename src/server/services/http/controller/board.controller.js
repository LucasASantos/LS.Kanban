const BoardServive = require('../../../domain/board.domain-service');


getboards = async () =>{
    return await BoardServive.getAllBoards();
}

getBoardById = async (id)=>{
    return await BoardServive.getBoard(id);
}

newBoard = async (board)=>{
    await BoardServive.createNewBoard(board)
}

module.exports ={
    getboards,
    getBoardById,
    newBoard
}