import React from 'react'
import {
          Button,
          Container,
          Row,
          Col
       } from 'react-bootstrap'

class AutomationUpgrades extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col sm="2">
                        <Button variant="primary">
                        Buy
                        </Button>
                    </Col>
                    <Col sm="6">
                        <p>Buy math game bot.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default AutomationUpgrades
