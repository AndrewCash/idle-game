import React from "react"
import Addiction from "./Addiction"
import resEnum from "./resEnum.js"
import addictionData from "./addictionData.js"
import CatagoryTab from "./CatagoryTab.js"
import {
    Button,
    Container,
    Tabs,
    Tab,
    OverlayTrigger
} from 'react-bootstrap'

const resourceNames = [
    "Happiness",
    "Fat",
    "Clout",
    "Tech Savvy",
    "Money"
]

class AddictionList extends React.Component {

    constructor(props) {
        super(props)

        let catagories = Object.keys(addictionData)

        let initAddictions = Object.values(addictionData).reduce((catObj, catItem, catagory) => {
            let addictions = Object.keys(catItem)

            let catagoryObj = Object.values(catItem).reduce((addObj, addItem, index) => {
                addObj[addictions[index]] = addItem.isUnlocked

                return addObj
            }, {})
            catObj[catagories[catagory]] = catagoryObj

            return catObj
        }, {})

        this.state = {purchasedAddictions: initAddictions}

        this.buyAddiction = this.buyAddiction.bind(this)
    }

    purchasedAddictionsFalseIfUndefined(catagory, index) {

        if (this.state.purchasedAddictions[catagory] === undefined) {
            return false
        }
        return (
            this.state.purchasedAddictions[catagory][index] === undefined ?
                false :
                this.state.purchasedAddictions[catagory][index]
        )
    }

    buyAddiction(catagory, index) {
        if (this.props.canAffordAddiction(catagory, index)) {
            this.setState(prevState => {
                let output = JSON.parse(JSON.stringify(prevState.purchasedAddictions))
                output[catagory][index] = true

                return {
                    purchasedAddictions: output
                }
            })
            this.props.updateResources(addictionData[catagory][index].unlockIds, addictionData[catagory][index].unlockCost.map((cost) => {return -1*cost}))
        }
    }

    nextUnlock(catagory) {
        // return index of next addiction to be unlocked in specified catagory
        const addictionCatagory = this.state.purchasedAddictions[catagory]

        for (let i = 0; i < Object.keys(addictionCatagory).length; i++) {
            if (!Object.values(addictionCatagory)[i]) {
                return Object.keys(addictionCatagory)[i]
            }
        }
    }

    oneLineOfCost(name, cost) {
        return (
            <p>{name}: {cost}</p>
        )
    }

    renderTooltip(catagory, index) {
        const nameArray = addictionData[catagory][index].unlockIds.map(id => {
            return resourceNames[id]
        })

        const costArray = addictionData[catagory][index].unlockCost

        let rows = []
        for (let i = 0; i < nameArray.length; i++) {
            rows.push(this.oneLineOfCost(nameArray[i], costArray[i]))
        }

        return (
            <div
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    padding: '2px 10px',
                    color: 'white',
                    borderRadius: 3
                }}
            >
                <p>Cost:</p>
                {rows}
            </div>
        )
    }

    render() {

        
        return (
            <div>
                <Container>
                    <Tabs defaultActiveKey="internet">
                        <Tab eventKey="internet" title="Internet">
                            <CatagoryTab
                                catagory="internet"
                                updateResources= {this.props.updateResources}
                                isPurchasedObject= {this.state.purchasedAddictions}
                                canAffordAddiction={this.props.canAffordAddiction}
                            />
                        </Tab>

                        <Tab eventKey="food" title="Food">
                            <CatagoryTab
                                catagory="food"
                                updateResources= {this.props.updateResources}
                                isPurchasedObject= {this.state.purchasedAddictions}
                                canAffordAddiction={this.props.canAffordAddiction}
                            />
                        </Tab>

                        <Tab eventKey="money" title="Money">
                            <CatagoryTab
                                catagory="money"
                                updateResources= {this.props.updateResources}
                                isPurchasedObject= {this.state.purchasedAddictions}
                                canAffordAddiction={this.props.canAffordAddiction}
                            />
                        </Tab>
                    </Tabs>
                </Container>
            </div>
        )
    }
}

export default AddictionList
