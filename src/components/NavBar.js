import React from 'react'
import styled from 'styled-components'
import {device} from '../styles/theme'

const Nav = styled.nav`
  background: ${props => props.theme.darkBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 40px;
`

const Header = styled.div`
  padding: 5px 0;
  img {
    height: 40px;
  }
  @media ${device.laptop} {
    width: 50%;
  }
  @media ${device.tablet} {
    width: 30%;
  }
`
const Links = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    text-align: center;
  }
  @media ${device.laptop} {
    width: 50%;
  }
  @media ${device.tablet} {
    width: 70%;
  }
`

function NavBar({logo, children}) {
  return (
    <Nav>
      <Header className="logo-header">
        <img src={logo} alt="Facultas Partners logo" />
      </Header>
      <Links>{children}</Links>
    </Nav>
  )
}

export default NavBar
