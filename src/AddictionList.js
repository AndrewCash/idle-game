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
                    <Tabs>
                        <Tab eventKey="addictions" title="Addictions">
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
                        <Tab eventKey="money" title="Money">
                            <p>The Money Store</p>
                            <p>"light nine... to a ten"</p>
                        </Tab>
                        <Tab eventKey="automation" title="Automation">
                            <p>Keep on chuggin</p>
                        </Tab>
                    </Tabs>
                </Container>


                {
                // <Addiction
                //            updateResource={this.props.updateResource}
                //            text="visit coolmathgames.com"
                //            cooldown={10000}
                //            ids={[1, 2]}
                //            deltas={[5, 10]}
                // />

            }

            </div>
        )
    }
}

export default AddictionList
