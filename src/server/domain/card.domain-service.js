const {Card} = require('../data/data')

createNewCard= async (card)=>{
    await Card.create(card);
}

updateContainerCard = async (card, containerId)=>{
    card.ContainerId = containerId;
    await Card.update(card);
}


module.exports ={
    createNewCard,
    updateContainerCard
}