import React from 'react'
import {
          Button,
          ProgressBar,
          Container,
          Row,
          Col
       } from 'react-bootstrap'

class UnpurchasedAddiction extends React.Component {
    render() {
        <Container>
            <Row>
                <Col className="my-1">
                <Button
                    onClick={event => {
                        this.handleClick();
                    }}
                    variant="primary"
                    block
                    >
                {this.props.addictionData.purchaseText}
                </Button>
                </Col>

                <Col className="my-3">
                    <ProgressBar className="my-0" now={this.state.barWidth} />
                </Col>
            </Row>
        </Container>
    }
}
export default UnpurchasedAddiction
