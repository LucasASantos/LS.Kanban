const {Container, Card} = require('../data/data')

const createNewContainer= async (container)=>{
    await Container.create(container);
}

const getAllContainersByBoard= async (BoardId)=>{
    return await Container.findAll({ 
        include: [{
                model:Card,
            }  
        ], 
        where: {BoardId}, 
    }).map(record =>
        record.get({ plain: true }));
}

const getContainer= async (id)=>{
    return await Container.findOne({id}).toJSON();
}

module.exports={
    getContainer,
    getAllContainersByBoard,
    createNewContainer
}