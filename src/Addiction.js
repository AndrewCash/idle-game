import React from 'react';
import styled from 'styled-components'
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

            this.props.updateFunction(this.props.ids, this.props.deltas)
            // setTimeout(() => {
            //     this.state.allowClick = true
            // }, 5000)
        }
    }

    updateProgressBar(clearProgBar, incrementProgBar) {
        if (this.state.allowClick) {
            let identity = setInterval(() => progress(this.state.barWidth), 200)
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
                barWidth: prevState.barWidth + 100*200/this.props.cooldown
            }
        })
    }

    render() {

        return (
            <Container>
                <Row>
                    <Col>
                    <Button
                        onClick={event => {
                            this.handleClick();
                            this.updateProgressBar(this.clearProgBar, this.incrementProgBar)
                        }}
                        variant="secondary"
                        >
                    {this.props.text}
                    </Button>
                    </Col>

                    <Col>
                        <ProgressBar now={this.state.barWidth} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Addiction
