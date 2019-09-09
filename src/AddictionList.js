import React from "react"
import Addiction from "./Addiction"

class AddictionList extends React.Component {
    render() {
        console.log(this.props)

        return (
            <div>
                <Addiction res={this.props.res} updateResource={this.props.updateResource} />
                <Addiction res={this.props.res} updateResource={this.props.updateResource} />
                <Addiction res={this.props.res} updateResource={this.props.updateResource} />
                <Addiction res={this.props.res} updateResource={this.props.updateResource} />
                <Addiction res={this.props.res} updateResource={this.props.updateResource} />
                <Addiction res={this.props.res} updateResource={this.props.updateResource} />
                <Addiction res={this.props.res} updateResource={this.props.updateResource} />
            </div>
        )
    }
}

export default AddictionList
