const sequelize = require('./data/data');

require('./services/start-service')

// const container = require('./domain/container.domain-service');

// const board = require('./domain/board.domain-service');

// const card = require('./domain/card.domain-service');



// const a = async () => {
//     //await board.createNewBoard({name:'Quadro boladão'});
//     // console.log(await board.getAllBoards());
//     // console.log(await board.getBoard(1));

//     // await container.createNewContainer({title:'name 2', BoardId:1});
//     // await container.createNewContainer({title:'name 80', BoardId:1});


//     // await card.createNewCard({text: "aaaaa  1", ContainerId: 3});
//     // await card.createNewCard({text: "aaaaa  2", ContainerId: 3});


    
//     console.log((await container.getAllContainersByBoard(1))[0])
// };

// a();