import React from 'react';
import './App.css';

import Dragula from 'react-dragula';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import BoardService from './services/board.service';
import BoardsPage from './pages/Boards/boards.page'



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = new BoardService().getBoard(1);
  }


  render() {
    

    // 

    return <BoardsPage></BoardsPage>;
  }
  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {};
      Dragula([document.getElementById('1'), document.getElementById('2'), document.getElementById('3')]);
    }
  };


  addNewCard=(data) => {
    this.setState(state => {
      state.boards.containers.find(c=> c.id == data.id).cards.push({id:100,text:"boladão no find"})

      const boards = state.boards
      return {
        boards
      };
    });
  };


}
