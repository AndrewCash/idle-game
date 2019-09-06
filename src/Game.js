import React from 'react';
import styled from 'styled-components'
import {ProgressBar} from 'react-bootstrap'

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            happiness: 0

        }
    }

    handleCoolMathGame() {
        console.log("played a a game")

        this.setState({
            happiness: 5
        })
    }


    render() {

        return (
            <div>
                <button onClick="handleCoolMathGame" >visit coolmathgames.com</button>
                <ProgressBar now={60} />
            </div>
        )
    }


}

export default Game;
