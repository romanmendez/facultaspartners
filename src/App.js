import React from 'react'
import {ThemeProvider} from 'styled-components'
import menuLogo from '../assets/logo-menu.png'
import {theme} from './styles/theme'
import {about, advisory} from '../data/text'
import NavBar from './components/NavBar'
import NavLink from './components/NavLink'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import ContactBtn from './components/ContactBtn'
import CardSection from './components/CardSection'
import Team from './components/TeamB'
import Wave from './components/Wave'
import {LanguageProvider, useLanguage} from './context'

function App() {
  const [language] = useLanguage()
  return (
    <LanguageProvider>
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
          <CardSection header={about.header} type="icon" data={about.cards} />
          <Wave />
          <Team />
          <CardSection
            header={advisory.header}
            type="tile"
            data={advisory.cards}
          />
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
