import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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
import TeamC from './components/TeamC'
import TeamB from './components/TeamB'
import TeamA from './components/TeamA'
import {LanguageProvider} from './context'
import BannerSection from './components/BannerSection'
import ListSection from './components/ListSection'
import HeaderBtn from './components/HeaderBtn'
import ContactForm from './components/Contact'

function App() {
  return (
    <Router>
      <Switch>
        <LanguageProvider>
          <ThemeProvider theme={theme}>
            <Route path="/" exact>
              <NavBar logo={menuLogo} links={links} />
              <Header header={header.header} subheader={header.subheader}>
                <HeaderBtn
                  text={header.button.text}
                  link={header.button.link}
                />
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
              <TeamC header={team.header} members={team.members} />
              <Element name="relationships" />
              <ListSection
                header={relationships.header}
                subheader={relationships.subheader}
                list={relationships.list}
              />
              <Element name="contact" />
              <ContactForm
                header={contact.header}
                inputFields={contact.form}
                emails={team.members}
              />
            </Route>

            <Route path="/v2">
              <NavBar logo={menuLogo} links={links} />
              <Header header={header.header} subheader={header.subheader}>
                <HeaderBtn
                  text={header.button.text}
                  link={header.button.link}
                />
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
              <TeamB header={team.header} members={team.members} />
              <Element name="relationships" />
              <ListSection
                header={relationships.header}
                subheader={relationships.subheader}
                list={relationships.list}
              />
              <ContactForm
                header={contact.header}
                inputFields={contact.form}
                emails={team.members}
              />
            </Route>

            <Route path="/v3">
              <NavBar logo={menuLogo} links={links} />
              <Header header={header.header} subheader={header.subheader}>
                <HeaderBtn
                  text={header.button.text}
                  link={header.button.link}
                />
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
              <TeamA header={team.header} members={team.members} />
              <Element name="relationships" />
              <ListSection
                header={relationships.header}
                subheader={relationships.subheader}
                list={relationships.list}
              />
              <ContactForm
                header={contact.header}
                inputFields={contact.form}
                emails={team.members}
              />
            </Route>
          </ThemeProvider>
        </LanguageProvider>
      </Switch>
    </Router>
  )
}

export default App
