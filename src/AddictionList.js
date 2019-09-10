import React from "react"
import Addiction from "./Addiction"
import resEnum from "./resEnum.js"
import addictionData from "./addictionData.js"
import {
    Button,
    Container,
    Tabs,
    Tab
} from 'react-bootstrap'

class AddictionList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {purchasedAddictions: }

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
        if (this.canAffordAddiction(catagory, index)) {
            this.setState(prevState => {
                let output = prevState.purchasedAddictions.map(cat => {return cat})
                output[catagory][index] = true

                return {
                    purchasedAddictions: output
                }
            })
            this.props.updateResources(addictionData[catagory][index].unlockIds, addictionData[catagory][index].unlockCost)
        }
    }

    canAffordAddiction(catagory, index) {
        let idsArray = addictionData[catagory][index].unlockIds
        for (let i = 0; i < addictionData[catagory][index].unlockIds.length; i++) {
            if (this.props.resources[idsArray[i]].value < addictionData[catagory][index].unlockCost[i]) {
                return false
            }
        }
        return true
    }



    render() {
        //console.log(this.props)

        return (
            <div>
                <Container>
                    <Tabs defaultActiveKey="internet">
                        <Tab eventKey="internet" title="Internet">
                            <Addiction
                                updateResources={this.props.updateResources}
                                addictionData= {addictionData.internet.coolmathgames}
                                isPurchased= {this.state.purchasedAddictions.internet.coolmathgames.isPurchased}
                            />
                            <Addiction
                                updateResources={this.props.updateResources}
                                addictionData= {addictionData.internet.facebook}
                                isPurchased= {this.state.purchasedAddictions.internet.facebook.isPurchased}
                            />
                            <Addiction
                                updateResources={this.props.updateResources}
                                addictionData= {addictionData.internet.reddit}
                                isPurchased= {this.state.purchasedAddictions.internet.reddit.isPurchased}
                            />
                            <Addiction
                                updateResources={this.props.updateResources}
                                addictionData= {addictionData.internet.chan}
                                isPurchased= {this.state.purchasedAddictions.internet.chan.isPurchased}
                            />
                            <Addiction
                                updateResources={this.props.updateResources}
                                addictionData= {addictionData.internet.conspiracyTheories}
                                isPurchased= {this.state.purchasedAddictions.internet.conspiracyTheories.isPurchased}
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
                                updateResources={this.props.updateResources}
                                addictionData= {addictionData.food.cookie}
                                isPurchased= {this.state.purchasedAddictions.food.cookie.isPurchased}
                            />
                            <Addiction
                                updateResources={this.props.updateResources}
                                addictionData= {addictionData.food.icecream}
                                isPurchased= {this.state.purchasedAddictions.food.icecream.isPurchased}
                            />
                        </Tab>

                        <Tab eventKey="money" title="Money">
                            <Addiction
                                updateResources={this.props.updateResources}
                                addictionData= {addictionData.food.mcRonaldsWork}
                                isPurchased= {this.state.purchasedAddictions.money.mcRonaldsWork.isPurchased}
                            />
                        </Tab>

                        <Tab eventKey="drugs" title="Drugs">
                        </Tab>
                    </Tabs>

                </Container>

            </div>
        )
    }
}

export default AddictionList
