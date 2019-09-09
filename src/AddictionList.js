import React from "react"
import Addiction from "./Addiction"

class AddictionList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        console.log("AddictionList props ", this.props)
        return (
            <div>
                <Addiction res={this.props.res} updateFunction={this.props.update} />
                <Addiction res={this.state} updateFunction={this.resourceUpdate} />
            </div>
        )
    }
}

export default AddictionList
