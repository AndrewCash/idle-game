import React from "react"
import Addiction from "./Addiction"
import addictionData from "./addictionData.js"
import {
          Container,
          Tabs,
          Tab
       } from 'react-bootstrap'

class AddictionList extends React.Component {

    constructor() {
        super()

        this.state = {
            purchasedAddictions: [[true]]
        }
    }

    purchasedAddictionsFalseIfUndefined(index1, index2) {

        if (this.state.purchasedAddictions[index1] === undefined) {
            return false
        }

        return (
            this.state.purchasedAddictions[index1][index2] === undefined ? false : this.state.purchasedAddictions[index1][index2]
        )
    }

    render() {
        //console.log(this.props)

        return (
            <div>
                <Container>
                    <Tabs defaultActiveKey="internet">
                        <Tab eventKey="internet" title="Internet">
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[0][0]}
                                purchased= {this.purchasedAddictionsFalseIfUndefined(0, 0)}
                            />
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[0][1]}
                                purchased= {this.purchasedAddictionsFalseIfUndefined(0, 1)}
                            />
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[0][2]}
                                purchased= {this.purchasedAddictionsFalseIfUndefined(0, 2)}
                            />
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[0][3]}
                                purchased= {this.purchasedAddictionsFalseIfUndefined(0, 3)}
                            />
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[0][4]}
                                purchased= {this.purchasedAddictionsFalseIfUndefined(0, 4)}
                            />
                        </Tab>

                        <Tab eventKey="food" title="Food">
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[1][0]}
                                purchased= {this.purchasedAddictionsFalseIfUndefined(1, 0)}
                            />
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[1][1]}
                                purchased= {this.purchasedAddictionsFalseIfUndefined(1, 1)}
                            />
                        </Tab>

                        <Tab eventKey="money" title="Money">
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[2][0]}
                                purchased= {this.purchasedAddictionsFalseIfUndefined(2, 0)}
                            />
                        </Tab>

                        <Tab eventKey="drugs" title="Drugs">
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[1][0]}
                                purchased= {this.purchasedAddictionsFalseIfUndefined(1, 0)}
                            />
                        </Tab>
                    </Tabs>

                </Container>

            </div>
        )
    }
}

export default AddictionList
