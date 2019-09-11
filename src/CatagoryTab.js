import React from "react"
import {
    Button,
    Container,
    Tabs,
    Tab,
    OverlayTrigger
} from 'react-bootstrap'
import addictionData from "./addictionData.js"
import Addiction from "./Addiction"

const resourceNames = [
    "Happiness",
    "Fat",
    "Clout",
    "Tech Savvy",
    "Money"
]

class CatagoryTab extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            purchasedAddictions: this.props.isPurchasedObject[this.props.catagory]
        }

        this.buyAddiction = this.buyAddiction.bind(this)
    }

    nextUnlock() {
        // return index of next addiction to be unlocked in specified catagory
        const addictionCatagory = this.state.purchasedAddictions

        for (let i = 0; i < Object.keys(addictionCatagory).length; i++) {
            if (!Object.values(addictionCatagory)[i]) {
                return Object.keys(addictionCatagory)[i]
            }
        }
    }

    renderTooltip(catagory, index) {
        const nameArray = addictionData[catagory][index].unlockIds.map(id => {
            return resourceNames[id]
        })

        const costArray = addictionData[catagory][index].unlockCost

        let rows = []
        for (let i = 0; i < nameArray.length; i++) {
            rows.push(<p>{nameArray[i]}: {costArray[i]}</p>)
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

    buyAddiction(index) {
        if (this.props.canAffordAddiction(this.props.catagory, index)) {
            this.setState(prevState => {
                let output = JSON.parse(JSON.stringify(prevState.purchasedAddictions))
                output[index] = true

                return {
                    purchasedAddictions: output
                }
            })
            this.props.updateResources(addictionData[this.props.catagory][index].unlockIds, addictionData[this.props.catagory][index].unlockCost.map((cost) => {return -1*cost}))
        }
    }

    render() {

        let rows = []

        for (let i = 0; i < Object.keys(addictionData[this.props.catagory]).length; i++) {
            rows.push(
                <Addiction
                    updateResources={this.props.updateResources}
                    addictionData= {addictionData[this.props.catagory][Object.keys(this.state.purchasedAddictions)[i]]}
                    isPurchased= {Object.values(this.state.purchasedAddictions)[i]}
                />
            )
        }

        if (!this.props.canAffordAddiction(this.props.catagory, Object.keys(this.state.purchasedAddictions)[0])) {
            return null
        } else {
            return (
                <div>
                    {rows}
                    <OverlayTrigger
                        placement="right-start"
                        delay={{ show: 250, hide: 400 }}
                        overlay={this.renderTooltip(this.props.catagory, this.nextUnlock(this.props.catagory))}
                    >
                        <Button
                            onClick={event => {
                                if (this.props.canAffordAddiction(this.props.catagory, this.nextUnlock(this.props.catagory))) {
                                    this.buyAddiction(this.nextUnlock(this.props.catagory))
                                }
                            }}
                            variant="secondary"
                            >
                        {addictionData[this.props.catagory][this.nextUnlock(this.props.catagory)].purchaseText}
                        </Button>
                    </OverlayTrigger>
                </div>
            )
        }
    }
}
export default CatagoryTab
