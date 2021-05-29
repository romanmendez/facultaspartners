import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../components/NavBar'

test('NavBar', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavBar />, div)
  console.log(div.innerHTML)
  expect(div.querySelector('img')).toHaveAttribute('src', 'logo-menu.png')
  expect(div.querySelector('img')).toHaveAttribute(
    'alt',
    'Facultar Partners logo',
  )
})
