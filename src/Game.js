import React from 'react'
import {
          Container,
          Row,
          Col,
          Navbar,
          Nav
       } from 'react-bootstrap'

import Addiction from './Addiction.js'

const resEnum = {
   HAP: 1,
   FAT: 2,
   CLOUT: 3,
   TECH: 4,
   MONEY: 5
}

class Game extends React.Component {
    constructor() {
        super()
        let resourceArray = [
            {
                id: resEnum.HAP, value: 0
            },
            {
                id: resEnum.FAT, value: 0
            },
            {
                id: resEnum.CLOUT, value: 0
            },
            {
                id: resEnum.TECH, value: 0
            },
            {
                id: resEnum.MONEY, value: 0
            }
        ]

        this.state = {
            resources: resourceArray
        }
        this.resourceUpdate = this.resourceUpdate.bind(this)
    }

    resourceUpdate(id, delta) {
        //console.log("played a a game")
        this.setState(prevState => {
            let resources = prevState.resources.map(res => {
                if (res.id === id) {
                    res.value += delta
                }
                return res
            })
            return resources
        })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={8}>
                          <Addiction res={this.state} updateFunction={this.resourceUpdate} />
                        </Col>
                        <Col sm={4}>
                            <Navbar bg="light" expand="lg" className="justify-content-center flex-column">
                                <Navbar.Brand>Addiction Sim</Navbar.Brand>
                                <Nav className="mr-auto flex-column" variant="tabs">
                                    <Nav.Item>
                                        <Nav.Link>Happiness: {this.state.resources[0].value}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link>Fat: {this.state.resources[1].value}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link>Clout: {this.state.resources[2].value}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link>Tech: {this.state.resources[3].value}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link>Money: {this.state.resources[4].value}</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }


}

export default Game;
