import React from "react"
import Addiction from "./Addiction"

class AddictionList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Addiction res={this.state} updateFunction={this.resourceUpdate} />
            </div>
        )
    }
}

export default AddictionList
