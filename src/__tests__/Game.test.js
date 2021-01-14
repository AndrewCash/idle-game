import React from 'react'
import ReactDOM from 'react-dom'
import Game from '../Game'
import { render } from '../test-utils'


it('Renders the game with initialState', () => {
  // const div = document.createElement('div')
  // ReactDOM.render(<Game />, div)

  render(<Game />, { initialState: {} })
});