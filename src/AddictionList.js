import React from "react"
import Addiction from "./Addiction"

class AddictionList extends React.Component {
    render() {
        console.log(this.props)

        return (
            <div>
                <Addiction
                           updateResource={this.props.updateResource}
                           text="visit coolmathgames.com"
                           cooldown={5000}
                           ids={[1]}
                           deltas={[5]}
                />
                <Addiction
                           updateResource={this.props.updateResource}
                           text="visit coolmathgames.com"
                           cooldown={10000}
                           ids={[1, 2]}
                           deltas={[5, 10]}
                />
                <Addiction
                           updateResource={this.props.updateResource}
                           text="visit coolmathgames.com"
                           cooldown={5000}
                           ids={[1, 2]}
                           deltas={[5, 10]}
                />
                <Addiction
                           updateResource={this.props.updateResource}
                           text="visit coolmathgames.com"
                           cooldown={5000}
                           ids={[1, 2]}
                           deltas={[5, 10]}
                />
                <Addiction
                           updateResource={this.props.updateResource}
                           text="visit coolmathgames.com"
                           cooldown={5000}
                           ids={[1, 2]}
                           deltas={[5, 10]}
                />
                <Addiction
                           updateResource={this.props.updateResource}
                           text="visit coolmathgames.com"
                           cooldown={5000}
                           ids={[1, 2]}
                           deltas={[5, 10]}
                />


            </div>
        )
    }
}

export default AddictionList
