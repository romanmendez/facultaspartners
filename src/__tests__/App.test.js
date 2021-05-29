import ''
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

const div = document.createElement('div')
const logo = div.querySelector('.logo-header')
ReactDOM.render(<App />, div)

test('App', () => {
  expect(logo).toHaveAttribute('src', 'logo-menu.png')
  expect(logo).toHaveAttribute('alt', 'Facultas Partners logo')
})
