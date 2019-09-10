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
            allowClick: true,
            barWidth: 0
        }

        this.handleClick = this.handleClick.bind(this)
        this.clearProgBar = this.clearProgBar.bind(this)
        this.incrementProgBar = this.incrementProgBar.bind(this)
    }

    handleClick() {
        if (this.state.allowClick) {
            this.setState(prevState =>{
                return {
                    allowClick: false,
                    barWidth: prevState.barWidth
                }
            })
            this.props.updateResource(this.props.addictionData.resIds, this.props.addictionData.deltas)
        }
    }

    updateProgressBar(clearProgBar, incrementProgBar) {
        if (this.state.allowClick) {
            let identity = setInterval(() => progress(this.state.barWidth), 100)
            function progress(width) {
                if (width >= 100) {
                        clearInterval(identity)
                        clearProgBar()
                } else {
                    incrementProgBar()
                }
            }
        }
    }

    clearProgBar() {
        this.setState(prevState => {
            return {
                allowClick: true,
                barWidth: 0
            }
        })
    }

    incrementProgBar() {
        this.setState(prevState => {
            return {
                allowClick: prevState.allowClick,
                barWidth: prevState.barWidth + 100*200/this.props.addictionData.cooldown
            }
        })
    }

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
                <p>Unlock Cost: {this.props.addictionData.unlockCost}</p>
            </div>
        );

        if (this.props.isPurchased) {
            return (
                <Container>
                    <Row>
                        <Col className="my-1">
                            <Button
                                onClick={event => {
                                    this.handleClick();
                                    this.updateProgressBar(this.clearProgBar, this.incrementProgBar)
                                }}
                                variant="primary"
                                block
                                >
                            {this.props.addictionData.text}
                            </Button>
                        </Col>

                        <Col className="my-3">
                            <ProgressBar className="my-0" now={this.state.barWidth} />
                        </Col>
                    </Row>
                </Container>
            )
        } else {
            return null
        }
    }
}

export default Addiction
