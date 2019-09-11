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
import Automation from './Automation.js'
import addictionData from './addictionData'
import Upgrades from './Upgrades.js'

class Game extends React.Component {
    constructor() {
        super()
        let resourceArray = [
            {
                id: resEnum.HAP, value: 1000, multiplier: 1
            },
            {
                id: resEnum.FAT, value: 0, multiplier: 1
            },
            {
                id: resEnum.CLOUT, value: 0, multiplier: 1
            },
            {
                id: resEnum.TECH, value: 0, multiplier: 1
            },
            {
                id: resEnum.MONEY, value: 0, multiplier: 1
            }
        ]

        this.state = {
            resources: resourceArray
        }

        this.updateResources = this.updateResources.bind(this)
        this.canAffordAddiction = this.canAffordAddiction.bind(this)
    }

    updateResources(ids, deltas) {
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

    updateMultipliers(ids, deltas) {
        this.setState(prevState => {
            let resources = prevState.resources.map(res => {
                for (let i = 0; i < ids.length; i++) {
                    if (res.id === ids[i]) {
                        res.multiplier += deltas[i]
                    }
                }
                return res
            })
            return resources
        })
    }

    canAffordAddiction(catagory, index) {
        for (let i = 0; i < addictionData[catagory][index].unlockCost.length; i++) {
            const unlockId = addictionData[catagory][index].unlockIds[i]

            if (addictionData[catagory][index].unlockCost[i] > this.state.resources[unlockId].value) {
                return false
            }
        }

        return true
    }

    render() {
        return (
            <div>
                <h1>Addiction Sim</h1>
                <Container>
                    <Row>
                        <Col sm={9}>
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
                                            <Nav.Item>
                                                <Nav.Link eventKey="upgrades">Upgrades</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={10}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="addictions">
                                                <AddictionList updateResources={this.updateMultipliers} canAffordAddiction={this.canAffordAddiction}/>
                                            </Tab.Pane>
                                        </Tab.Content>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="automation">
                                                <Automation />
                                            </Tab.Pane>
                                        </Tab.Content>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="upgrades">
                                                <Upgrades updateResources={this.updateResources} canAffordItem={this.canAffordAddiction}/>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                        <Col sm={3}>
                            <Navbar bg="light" expand="lg" className="justify-content-center flex-column">
                                <Navbar.Brand>Resources</Navbar.Brand>
                                <Nav className="mr-auto flex-column">
                                    <Row >
                                        <Col>
                                            <Nav.Item>
                                                <Nav.Link className="text-right" style={{color: "royalblue"}}>Happiness: </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="text-right" style={{color: "orange"}}>Fat: </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="text-right" style={{color: "orangered"}}>Clout: </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="text-right" style={{color: "red"}}>Tech: </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="text-right" style={{color: "green"}}>Money: </Nav.Link>
                                            </Nav.Item>
                                        </Col>
                                        <Col >
                                            <Nav.Item>
                                                <Nav.Link style={{color: "royalblue"}}>{this.state.resources[resEnum.HAP].value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link style={{color: "orange"}}> {this.state.resources[resEnum.FAT].value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link style={{color: "orangered"}}>{this.state.resources[resEnum.CLOUT].value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link style={{color: "red"}}>{this.state.resources[resEnum.TECH].value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link style={{color: "green"}}>{this.state.resources[resEnum.MONEY].value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Nav.Link>
                                            </Nav.Item>
                                        </Col>
                                    </Row>
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
