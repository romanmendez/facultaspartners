import React from 'react'
import styled from 'styled-components'
import {useLanguage} from '../context'
import Center from '../layout/Center'
import headerImage from '../../assets/header-bg.jpg'

const SectionContainer = styled.div`
  position: relative;
  background-image: url(${headerImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
`
const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0 50px;
  height: 100%;
  * + * {
    margin-top: 1.5rem;
  }
  .text {
    position: relative;
    width: 100%;

    h1,
    h2 {
      text-align: center;
      color: white;
    }
    h1 {
      line-height: 3rem;
      font-weight: 700;
      font-size: calc(35px + (70 - 35) * ((100vw - 300px) / (1600 - 300)));
      text-transform: uppercase;
    }
    h2 {
      font-weight: 300;
      font-size: 17px;
      line-height: 1.5rem;
    }
  }
`

function Header({header, subheader, children}) {
  const [language] = useLanguage()

  return (
    <SectionContainer>
      <TextContainer>
        <div className="text">
          <Center>
            <p style={{color: 'white'}}>{subheader[language]}</p>
          </Center>
          <h1>{header[language]}</h1>
        </div>
        <div>{children}</div>
      </TextContainer>
    </SectionContainer>
  )
}

export default Header
