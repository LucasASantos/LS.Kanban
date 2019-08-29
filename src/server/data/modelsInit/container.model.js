const Sequelize = require('sequelize');

const initContainer = (Container, sequelize)=>{
    Container.init({
        title:{
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        sequelize, 
        modelName: 'Container'
    })
}

module.exports = {
    initContainer
}