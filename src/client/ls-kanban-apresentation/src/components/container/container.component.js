import './container.component.css';

import React, {Component } from 'react';
import { Col, Card, Button } from 'react-bootstrap';



export default class ContainerBoard extends Component{

  cont = 0 ;
    state= {
        container: {    }
    }

    constructor(props){
        super(props);
        this.state.container = this.props.container;
    }
    render(){

        return <Col className="container overflow-auto" id={this.props.container.id}>{
            this.props.container.cards.map((card) => {
              return <Card body key={card.id}>{card.text}</Card>
            })
          }
        <Button  onClick={()=>this.addNewCard(this.props.container.id)} variant="primary" size="lg" block>
          Add novo card
        </Button>
        </Col>
    }

    

    
    addNewCard=(id) => {
        this.setState(state => {
          this.cont ++;
          state.container.cards.push({id:100,text:`novo card ${this.cont}`})
    
          const container=  state.container
          return {
            container
          };
        });
      };
}