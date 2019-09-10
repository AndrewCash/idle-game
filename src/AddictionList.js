import React from "react"
import Addiction from "./Addiction"
import addictionData from "./addictionData.js"
import {
    Button,
    Container,
    Tabs,
    Tab
} from 'react-bootstrap'

class AddictionList extends React.Component {

    constructor() {
        super()

        this.state = {
            purchasedAddictions: [addictionData[0].map(add => {
                return add.isUnlocked
            })]
        }

        this.buyAddiction = this.buyAddiction.bind(this)
    }

    purchasedAddictionsFalseIfUndefined(catagory, index) {

        if (this.state.purchasedAddictions[catagory] === undefined) {
            return false
        }

        return (
            this.state.purchasedAddictions[catagory][index] === undefined ? false : this.state.purchasedAddictions[catagory][index]
        )
    }

    buyAddiction(catagory, index) {
        this.setState(prevState => {
            let output = prevState.purchasedAddictions.map(cat => {return cat})
            output[catagory][index] = true

            return {
                purchasedAddictions: output
            }
        })
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
                                isPurchased= {this.purchasedAddictionsFalseIfUndefined(0, 0)}
                            />
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[0][1]}
                                isPurchased= {this.purchasedAddictionsFalseIfUndefined(0, 1)}
                            />
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[0][2]}
                                isPurchased= {this.purchasedAddictionsFalseIfUndefined(0, 2)}
                            />
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[0][3]}
                                isPurchased= {this.purchasedAddictionsFalseIfUndefined(0, 3)}
                            />
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[0][4]}
                                isPurchased= {this.purchasedAddictionsFalseIfUndefined(0, 4)}
                            />
                            <Button
                                onClick={event => {
                                    this.buyAddiction(0, 1)
                                }}
                                variant="secondary"
                                >
                            Buy Something
                            </Button>
                        </Tab>

                        <Tab eventKey="food" title="Food">
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[1][0]}
                                isPurchased= {this.purchasedAddictionsFalseIfUndefined(1, 0)}
                            />
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[1][1]}
                                isPurchased= {this.purchasedAddictionsFalseIfUndefined(1, 1)}
                            />
                        </Tab>

                        <Tab eventKey="money" title="Money">
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[2][0]}
                                isPurchased= {this.purchasedAddictionsFalseIfUndefined(2, 0)}
                            />
                        </Tab>

                        <Tab eventKey="drugs" title="Drugs">
                            <Addiction
                                updateResource={this.props.updateResource}
                                addictionData= {addictionData[1][0]}
                                isPurchased= {this.purchasedAddictionsFalseIfUndefined(1, 0)}
                            />
                        </Tab>
                    </Tabs>

                </Container>

            </div>
        )
    }
}

export default AddictionList
