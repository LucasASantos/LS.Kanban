const Sequelize = require('sequelize');

const initCard = (Card, sequelize)=>{
    Card.init({
        text:{
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        sequelize, 
        modelName: 'Card'
    })
}

module.exports = {
    initCard
}