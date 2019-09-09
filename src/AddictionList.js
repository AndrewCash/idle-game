import React from "react"
import Addiction from "./Addiction"

class AddictionList extends React.Component {
    render() {
        return (
            <div>
                <Addiction res={this.props.res} updateResource={this.props.updateResource} />
                <Addiction res={this.props.res} updateResource={this.props.updateResource} />
            </div>
        )
    }
}

export default AddictionList
