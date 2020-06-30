import React from 'react'
import styled from 'styled-components'
import text from '../../data/data.json'
import headerImage from '../../assets/header-bg.jpg'

const Container = styled.div`
  background-image: url(${headerImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
`
const Text = styled.div`
  height: 100%;
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

function Header() {
  return (
    <Container>
      <Text>
        <h2>{text.header.description}</h2>
        <h1>{text.header.slogan}</h1>
      </Text>
    </Container>
  )
}

export default Header
