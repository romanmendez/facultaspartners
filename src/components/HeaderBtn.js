import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'
import {useLanguage} from '../context'

const Button = styled.div`
  background: white;
  width: 145px;
  height: 35px;
  position: relative;
  top: 210px;
  margin: 0 auto;
  a {
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: ${props => props.theme.darkBlue};
    height: inherit;
  }
`

function HeaderBtn({text, link}) {
  const [language] = useLanguage()
  return (
    <Button>
      <Link to={link}>{text[language]}</Link>
    </Button>
  )
}

export default HeaderBtn
