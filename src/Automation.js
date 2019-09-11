import React from 'react'
import {
          Button,
          Container,
          Row,
          Col,
          OverlayTrigger
       } from 'react-bootstrap'

class Automation extends React.Component {

    render() {

        const renderTooltip = props => (
            <div
                {...props}
                style={{
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
                }}
            >
                Costs $1000
            </div>
        );

        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col sm="2">
                        <OverlayTrigger
                            placement="right-start"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Button variant="primary">
                            Buy
                            </Button>
                        </OverlayTrigger>
                    </Col>
                    <Col sm="6">
                        <Row className="justify-content-md-center">
                            <p>Math game bot.</p>
                        </Row>
                        <Row className="justify-content-md-center">
                            <p>Costs $1000</p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Automation
