import React from 'react'
import {ThemeProvider} from 'styled-components'
import menuLogo from '../assets/logo-menu.png'
import {theme} from './styles/theme'
import {
  links,
  header,
  about,
  team,
  advisory,
  capital,
  relationships,
  contact,
} from '../data/text'
import NavBar from './components/NavBar'
import Header from './components/Header'
import {Element} from 'react-scroll'
import TileSection from './components/TileSection'
import IconSection from './components/IconSection'
import Team from './components/TeamA'
import {LanguageProvider} from './context'
import BannerSection from './components/BannerSection'
import ListSection from './components/ListSection'
import HeaderBtn from './components/HeaderBtn'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <NavBar logo={menuLogo} links={links} />
        <Header header={header.header} subheader={header.subheader}>
          <HeaderBtn text={header.button.text} link={header.button.link} />
        </Header>
        <Element name="about" />
        <IconSection header={about.header} data={about.cards} />
        <Element name="wedo" />
        <BannerSection
          side="left"
          header={advisory.header}
          text={advisory.description}
          img={advisory.img}
        />
        <TileSection header={advisory.subheader} data={advisory.cards} />
        <BannerSection
          side="right"
          header={capital.header}
          text={capital.description}
          img={capital.img}
        />
        <TileSection header={capital.subheader} data={capital.cards} />
        <Element name="team" />
        <Team header={team.header} members={team.members} />
        <Element name="relationships" />
        <ListSection
          header={relationships.header}
          subheader={relationships.subheader}
          list={relationships.list}
        />
        <Element name="contact" />
        <ContactForm
          header={contact.header}
          form={contact.form}
          emails={team.members}
          thankyou={contact.thankyou}
        />
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
