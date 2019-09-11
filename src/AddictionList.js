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
