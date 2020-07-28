import React from 'react'
import {useLanguage} from '../context'
import headerImage from '../../assets/header-bg.jpg'
import {Link} from 'react-scroll'
import {theme} from '../styles/theme'
import Frame from '../layout/Frame'
import Stack from '../layout/Stack'
import Center from '../layout/Center'
import Box from '../layout/Box'
import Cluster from '../layout/Cluster'

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
      <p style={{color: 'white', textTransform: 'uppercase'}}>
        {link.text[language]}
      </p>
    </Link>
  ))

  return (
    <Stack space={0}>
      <Box background={theme.darkBlue}>
        <Cluster margin={1} gap={1}>
          {mapLinks}
        </Cluster>
      </Box>
      <Frame width={16} height={8}>
        <img src={headerImage} />
        <Stack space={1} justify="center" align="center">
          <p style={{color: 'white', textAlign: 'center'}}>
            {subheader[language]}
          </p>
          <h1 style={{color: 'white', textAlign: 'center'}}>
            {header[language]}
          </h1>
          <Box background="white" onClick={button.link} width={6} radius={-1}>
            <p>{button.text[language]}</p>
          </Box>
        </Stack>
      </Frame>
    </Stack>
  )
}

export default Header
