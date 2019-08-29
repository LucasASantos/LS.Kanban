import React from 'react';
import BoardService from '../../services/board.service';
import { Container, Button, Row, Navbar } from 'react-bootstrap';
import "./borad.page.css";
import ContainerBoard from '../../components/container/container.component';

import Dragula from 'react-dragula';


const boardService = new BoardService();


export default class Boards extends React.Component {
    constructor(props) {
        super(props);
        this.state = boardService.getBoard(1);

        console.log(this.props)
    }
    render() {
        return <Container ref={this.dragulaDecorator}>
       <Navbar className="bg-light justify-content-between">
                <a inline>
                    Quadro {this.state.boards.name}
                </a>
                <Button inline>
                    Add nova Coluna
                </Button>
            </Navbar>
         <Row>
        {this.state.boards.containers.map((item) => {
            return <ContainerBoard ref={this.dragulaDecorator} container={item}></ContainerBoard>
            })
        }
        </Row>
    </Container>;
        

    }

    dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
          let options = {};

          Dragula(this.state.boards.containers.map((item) => {
            return document.getElementById(item.id)
          }));
        }
      };

}
