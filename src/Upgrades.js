import React from 'react'
import {
    Button
} from 'react-bootstrap'

class Upgrades extends React.Component {



    handleClick() {
        if (this.props.canAffordItem(0, 1 )) {
            this.setState(prevState =>{
                return {
                    allowClick: false,
                    barWidth: prevState.barWidth
                }
            })
            this.props.updateResources(this.props.addictionData.resIds, this.props.addictionData.deltas)
        }
    }

    render() {

        return (
            <div>
            <Button
                onClick={event => {
                    this.handleClick();
                }}
                variant="primary"
                block
            >
                Buy Level 1 Multiplier
                </Button>
            </div>
        )

    }
}

export default Upgrades
