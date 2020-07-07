import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'
import {device} from '../styles/theme'
import {useLanguage} from '../context'
import LanguageBtn from './LanguageBtn'

const Nav = styled.nav`
  background: ${props => props.theme.darkBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 40px;
`

const Logo = styled.div`
  padding: 5px 0;
  display: flex;
  align-items: center;
  img {
    height: 40px;
    margin-right: 10px;
  }
`
const Links = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 20px;
  cursor: pointer;
  a {
    text-align: center;
  }
  @media (min-width: 1300px) {
    width: 50%;
  }
  @media (max-width: 1300px) {
    width: 70%;
  }
  @media (max-width: 900px) {
    display: none;
  }
`
const Text = styled.span`
  color: ${props => props.theme.navLinks};
  text-transform: uppercase;
  font-family: 'Nunito';
  font-size: 11px;
  letter-spacing: 1px;
  opacity: 0.8;
`

function NavBar({logo, links}) {
  const [language] = useLanguage()
  const mapLinks = links.map((link, i) => (
    <Link key={i + link.link} to={link.link} smooth={true}>
      <Text>{link.text[language]}</Text>
    </Link>
  ))

  return (
    <Nav>
      <Logo className="logo-Logo">
        <img src={logo} alt="Facultas Partners logo" />
        <LanguageBtn />
      </Logo>
      <Links>{mapLinks}</Links>
    </Nav>
  )
}

export default NavBar
