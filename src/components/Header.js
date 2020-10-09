import React from 'react';
import { useLanguage } from '../context';
import styled from 'styled-components';
import headerImage from '../../assets/header-bg.jpg';
import { Link } from 'react-scroll';
import { theme } from '../styles/theme';
import Cover from '../layout/Cover';
import Stack from '../layout/Stack';
import Box from '../layout/Box';
import Cluster from '../layout/Cluster';
import BurgerMenu from './Menu';
import LanguageBtn from './LanguageBtn';

function Header({ header, subheader, logo, links, button }) {
  const [language] = useLanguage();

  return (
    <Stack space={0}>
      <BurgerMenu links={links} />
      <Cover background={headerImage} height='70vh'>
        <Box>
          <Stack space={1} justify='center' align='center'>
            <Box width={8}>
              <img width='100%' src={logo} />
            </Box>
            <p style={{ color: 'white', textAlign: 'center' }}>
              {subheader[language]}
            </p>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
              {header[language]}
            </h1>
            <Link to={button.link} smooth='true'>
              <Box background='white' width={6} radius={-1} button={true}>
                {button.text[language]}
              </Box>
            </Link>
            <LanguageBtn />
          </Stack>
        </Box>
      </Cover>
    </Stack>
  );
}

export default Header;
