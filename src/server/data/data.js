const {connectionString} = require('./data.json').settings;
const Sequelize = require('sequelize');

const {initBoard } = require('./modelsInit/board.model');
const {initContainer } = require('./modelsInit/container.model');
const {initCard } = require('./modelsInit/card.model');



const pg = require('pg');
pg.defaults.ssl = true;
const sequelize = new Sequelize(connectionString);


class Board extends Sequelize.Model {}
class Container extends Sequelize.Model {}
class Card extends Sequelize.Model {}


initBoard(Board,sequelize);
initContainer(Container,sequelize);
initCard(Card, sequelize);

associate = ()=>{
    Board.hasMany(Container);
    Container.belongsTo(Board)
    Container.hasMany(Card);
    Card.belongsTo(Container)
}
associate();


//sequelize.sync({force: true}).then(()=>{});

module.exports ={
    Board,
    Container,
    Card
}