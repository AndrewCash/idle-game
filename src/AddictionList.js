import React from "react"
import Addiction from "./Addiction"
import addictionData from "./addictionData.js"
import {
    Button,
    Container,
    Tabs,
    Tab,
    OverlayTrigger
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

    nextUnlock(catagory) {
        // return index of next addiction to be unlocked in specified catagory

        let addictionCatagory = this.state.purchasedAddictions[catagory]
        for (let index = 0; index < addictionCatagory.length; index++) {
            if (!addictionCatagory[index]) {
                return (index)
            }
        }
    }

    render() {
        //console.log(this.state)

        const renderTooltip = (props) => (
            <div
                {...props}
                style={{
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
                }}
            >
                <p>Unlock Cost: {addictionData[0][this.nextUnlock(0)].unlockCost}</p>
            </div>
        );

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

                            <OverlayTrigger
                                placement="right-start"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                                >
                                <Button
                                    onClick={event => {
                                        if (this.props.canAffordAddiction(0,this.nextUnlock(0))) {
                                            this.buyAddiction(0, this.nextUnlock(0))
                                        }
                                    }}
                                    variant="secondary"
                                    >
                                Buy {addictionData[0][this.nextUnlock(0)].text}
                                </Button>
                            </OverlayTrigger>

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
