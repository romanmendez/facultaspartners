import React from 'react';
import { ThemeProvider } from 'styled-components';
import menuLogo from '../assets/logo-menu.png';
import { theme } from './styles/theme';
import {
  links,
  header,
  about,
  advisory,
  capital,
  relationships,
  contact,
} from '../data';
import Header from './components/Header';
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
          <IconSection header={about.header} data={about.cards} />
          <BannerSection
            side='left'
            header={advisory.header}
            text={advisory.description}
            img={advisory.img}
          />
          <IconSection header={advisory.subheader} data={advisory.cards} />
          <BannerSection
            side='right'
            header={capital.header}
            text={capital.description}
            img={capital.img}
          />
          <IconSection header={capital.subheader} data={capital.cards} />
        </Stack>
        <ListSection
          header={relationships.header}
          subheader={relationships.subheader}
          list={relationships.list}
        />
        <ContactForm
          header={contact.header}
          form={contact.form}
          contacts={[
            {
              name: 'Miguel A. Mendez',
              email: 'mmendez@facultaspartners.com',
              team: 'us',
            },
            {
              name: 'Enrique Sainz Martinez',
              email: 'esainz@facultaspartners.com',
              team: 'eu',
            },
          ]}
          thankyou={contact.thankyou}
        />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
