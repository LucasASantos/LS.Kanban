import React from 'react';
import BoardService from '../../services/board.service';
import { Container, Button, Row, Col, Card, Navbar } from 'react-bootstrap';
import "./borads.page.css"

const boardService = new BoardService();


export default class Boards extends React.Component {
    constructor(props) {
        super(props);
        this.state = boardService.getBoards();
    }
    render() {
        return<Container id='boards-page'>
            <Navbar className="bg-light justify-content-between">
                <a inline>
                    Quadros
                </a>
                <Button inline onClick={async ()=> await this.newBoard()}>
                    Add novo Quadro
                </Button>
            </Navbar>
            <Row className="justify-content-md-center">
                <Col>
                {this.state.boards.map((item)=> {
                    return <Card className="justify-content-md-center" onClick={()=> this.openBoard(item.id)}>{item.name}</Card>
                })}
                </Col>
            </Row>
        </Container>
        

    }

    openBoard = (id)=>{
        console.log(id)
    }

    newBoard = async (id)=>{
       await boardService.createBoard({name: 'mega teste'});
    }
}
