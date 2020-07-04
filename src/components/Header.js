import React from 'react'
import styled from 'styled-components'
import {useLanguage} from '../context'
import headerImage from '../../assets/header-bg.jpg'

const Container = styled.div`
  position: relative;
  background-image: url(${headerImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
`
const Text = styled.div`
  position: relative;
  top: 200px;
  width: 600px;
  margin: 0 auto;
  * + * {
    margin: 1.5rem;
  }
  h1,
  h2 {
    text-align: center;
    color: white;
  }
  h1 {
    line-height: 2rem;
    font-weight: 300;
    font-size: 35px;
    text-transform: uppercase;
  }
  h2 {
    font-weight: 300;
    font-size: 17px;
    line-height: 1.5rem;
  }
`

function Header({header, subheader, children}) {
  const [language] = useLanguage()

  return (
    <Container>
      <Text>
        <h2>{subheader[language]}</h2>
        <h1>{header[language]}</h1>
      </Text>
      {children}
    </Container>
  )
}

export default Header
