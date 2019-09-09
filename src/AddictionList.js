import React from "react"
import Addiction from "./Addiction"
import addictionData from "./addictionData.js"

class AddictionList extends React.Component {
    render() {
        console.log(this.props)

        return (
            <div>
                <Addiction
                           updateResource={this.props.updateResource}
                           addictionData= {addictionData[0]}
                />
                <Addiction
                           updateResource={this.props.updateResource}
                           addictionData= {addictionData[1]}
                />
                <Addiction
                           updateResource={this.props.updateResource}
                           addictionData= {addictionData[2]}
                />
                <Addiction
                           updateResource={this.props.updateResource}
                           addictionData= {addictionData[3]}
                />
                <Addiction
                           updateResource={this.props.updateResource}
                           addictionData= {addictionData[4]}
                />
            </div>
        )
    }
}

export default AddictionList
