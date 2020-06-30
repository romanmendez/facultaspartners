import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Text = styled.span`
  color: ${props => props.theme.navLinks};
  text-transform: uppercase;
  font-family: 'Nunito';
  font-size: 11px;
  letter-spacing: 1px;
  opacity: 0.8;
`

function NavLink({to, children}) {
  return (
    <Link to={to}>
      <Text>{children}</Text>
    </Link>
  )
}

export default NavLink
