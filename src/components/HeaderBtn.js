import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'
import {useLanguage} from '../context'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  div {
    background: white;
    width: 145px;
    height: 35px;
    border-radius: 5px;
    cursor: pointer;
    a {
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      color: ${props => props.theme.darkBlue};
      height: inherit;
    }
  }
`

function HeaderBtn({text, link}) {
  const [language] = useLanguage()
  return (
    <ButtonContainer>
      <div>
        <Link to={link}>{text[language]}</Link>
      </div>
    </ButtonContainer>
  )
}

export default HeaderBtn
