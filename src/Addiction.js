import React from 'react'
import {
          Button,
          ProgressBar,
          Container,
          Row,
          Col
       } from 'react-bootstrap'

class Addiction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startTime: 0,
            endTime: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // this.setState({
        //     startTime: new Date(),
        //     endTime: startTime + this.props.
        // })
    }

    render() {
        let now = 0
        return (
            <Container>
                <Row>
                    <Col>
                    <Button
                        onClick={event => this.props.updateFunction(this.props.id, 5)}
                        variant="secondary"
                        size="sm"
                        >
                    visit coolmathgames.com
                    </Button>
                    </Col>

                    <Col>
                        <ProgressBar now={now} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Addiction
