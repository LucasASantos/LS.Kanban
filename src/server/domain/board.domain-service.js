const {Board, Container} = require('../data/data')

const createNewBoard= async (board)=>{
    await Board.create(board);
}

const getAllBoards= async (where)=>{
    return await Board.findAll({
        where,
        raw:true
    });
}

const getBoard= async (id)=>{
    return (await Board.findByPk(id)).toJSON();
}

module.exports={
    getBoard,
    getAllBoards,
    createNewBoard
}

