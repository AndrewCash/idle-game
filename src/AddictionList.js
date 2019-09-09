import React from "react"
import Addiction from "./Addiction"
import addictionData from "./addictionData.js"
import {
          Container,
          Tabs,
          Tab
       } from 'react-bootstrap'

class AddictionList extends React.Component {
    render() {
        //console.log(this.props)

        return (
            <div>
                <Container>
                    <Tabs defaultActiveKey="internet">
                        <Tab eventKey="internet" title="Internet">
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
                        </Tab>
                        <Tab eventKey="food" title="Food">
                            <p>MMMMM</p>
                        </Tab>
                        <Tab eventKey="money" title="Money">
                            <p>The Money Store</p>
                            <p>"light nine... to a ten"</p>
                        </Tab>

                    </Tabs>

                </Container>

            </div>
        )
    }
}

export default AddictionList
