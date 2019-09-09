import React from 'react'
import {
          Container,
          Row,
          Col,
          Navbar,
          Nav,
          Tab
       } from 'react-bootstrap'

import resEnum from './resEnum.js'
import AddictionList from './AddictionList.js'

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

    resourceUpdate(ids, deltas) {
        this.setState(prevState => {
            let resources = prevState.resources.map(res => {
                for (let i = 0; i < ids.length; i++) {
                    if (res.id === ids[i]) {
                        res.value += deltas[i]
                    }
                }
                return res
            })
            return resources
        })
    }

    render() {
        return (
            <div>
                <h1>Addiction Sim</h1>

                <Container>
                    <Row>
                        <Col sm={10}>
                            <Tab.Container defaultActiveKey="addictions">
                                <Row>
                                    <Col sm={2}>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="addictions">Addictions</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="automation">Automation</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={10}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="addictions">
                                                <AddictionList updateResource={this.resourceUpdate}/>
                                            </Tab.Pane>
                                        </Tab.Content>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="automation">
                                                <p>Keep on chuggin</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>

                        <Col sm={2}>
                            <Navbar bg="light" expand="lg" className="justify-content-center flex-column">
                                <Navbar.Brand>Resources</Navbar.Brand>
                                <Nav className="mr-auto flex-column">
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
