const Sequelize = require('sequelize');

const initBoard = (Board, sequelize)=>{
    Board.init({
        name:{
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        sequelize, 
        modelName: 'Board'
    });
}

module.exports = {
    initBoard
}