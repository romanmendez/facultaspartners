import React from 'react'
import {useLanguage} from '../context'
import styled from 'styled-components'
import headerImage from '../../assets/header-bg.jpg'
import {Link} from 'react-scroll'
import {theme} from '../styles/theme'
import Cover from '../layout/Cover'
import Stack from '../layout/Stack'
import Box from '../layout/Box'
import Cluster from '../layout/Cluster'
import LanguageBtn from './LanguageBtn'

const TextLink = styled.p`
  font-size: ${props => props.theme.scale(0)};
  color: white;
  text-transform: uppercase;
`

function Header({header, subheader, logo, links, button}) {
  const [language] = useLanguage()

  const mapLinks = links.map((link, i) => (
    <Link
      key={i + link.link}
      to={link.link}
      smooth={true}
      spy={true}
      offset={-48}
    >
      <TextLink>{link.text[language]}</TextLink>
    </Link>
  ))

  return (
    <Stack space={0}>
      <Box background={theme.darkBlue}>
        <Cluster margin={1} gap={1} justify="center">
          {mapLinks}
        </Cluster>
      </Box>
      <Cover background={headerImage} height="70vh">
        <Box>
          <Stack space={1} justify="center" align="center">
            <Box width={8}>
              <img width="100%" src={logo} />
            </Box>
            <p style={{color: 'white', textAlign: 'center'}}>
              {subheader[language]}
            </p>
            <h1 style={{color: 'white', textAlign: 'center'}}>
              {header[language]}
            </h1>
            <Box
              background="white"
              onClick={button.link}
              width={6}
              radius={-1}
              button={true}
            >
              <p>{button.text[language]}</p>
            </Box>
            <LanguageBtn />
          </Stack>
        </Box>
      </Cover>
    </Stack>
  )
}

export default Header
