import React from 'react'
import {ThemeProvider} from 'styled-components'
import menuLogo from '../assets/logo-menu.png'
import {theme} from './styles/theme'
import NavBar from './components/NavBar'
import NavLink from './components/NavLink'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import ContactBtn from './components/ContactBtn'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar logo={menuLogo}>
          <NavLink to="*">About Us</NavLink>
          <NavLink to="*">What We Do</NavLink>
          <NavLink to="*">Special Relationships</NavLink>
          <NavLink to="*">News</NavLink>
          <NavLink to="*">Contact</NavLink>
        </NavBar>
        <Header>
          <ContactBtn />
        </Header>
      </Router>
    </ThemeProvider>
  )
}

export default App
