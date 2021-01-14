import React from 'react'
import App from '../App'
import { render } from '../test-utils'

it('Renders the game with initialState', () => {
  // const div = document.createElement('div')
  // ReactDOM.render(<Game />, div)

  render(<App />, { initialState: {} })
});