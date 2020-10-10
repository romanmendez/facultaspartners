import React from 'react';
import { ThemeProvider } from 'styled-components';
import menuLogo from '../assets/logo-menu.png';
import { theme } from './styles/theme';
import {
  links,
  header,
  about,
  team,
  advisory,
  capital,
  relationships,
  contact,
} from '../data';
import Header from './components/Header';
import { Element } from 'react-scroll';
import IconSection from './components/IconSection';
import Team from './components/Team';
import { LanguageProvider } from './context';
import BannerSection from './components/BannerSection';
import ListSection from './components/ListSection';
import ContactForm from './components/ContactForm';
import Stack from './layout/Stack';
import BurgerMenu from './components/Menu';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Stack space={3}>
          <Header
            header={header.header}
            subheader={header.subheader}
            logo={menuLogo}
            button={header.button}
          ></Header>
          <Element name='about'>
            <IconSection header={about.header} data={about.cards} />
          </Element>
          <Element name='wedo'>
            <BannerSection
              side='left'
              header={advisory.header}
              text={advisory.description}
              img={advisory.img}
            />
          </Element>
          <IconSection header={advisory.subheader} data={advisory.cards} />
          <BannerSection
            side='right'
            header={capital.header}
            text={capital.description}
            img={capital.img}
          />
          <IconSection header={capital.subheader} data={capital.cards} />
          <Element name='team'>
            <Team
              header={team.header}
              hover={team.hover}
              members={team.members}
            />
          </Element>
        </Stack>
        <Element name='relationships'>
          <ListSection
            header={relationships.header}
            subheader={relationships.subheader}
            list={relationships.list}
          />
        </Element>
        <Element name='contact'>
          <ContactForm
            header={contact.header}
            form={contact.form}
            emails={team.members}
            thankyou={contact.thankyou}
          />
        </Element>
        <BurgerMenu links={links} />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
