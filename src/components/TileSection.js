import React from 'react'
import styled from 'styled-components'
import {useLanguage} from '../context.js'
import {device} from '../styles/theme'

const SectionContainer = styled.div`
  margin: 50px 100px;
`

const Description = styled.p`
  font-size: 16px;
  font-weight: 200;
  width: 600px;
  text-align: center;
  margin: 0 auto;
`
const Divider = styled.div`
  height: 4px;
  width: 85px;
  margin: 20px auto;
  background: ${props => props.theme.darkBlue};
  border-radius: 20px;
`

const TileContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin-top: 50px;
  .container {
    min-width: 350px;
    position: relative;
    text-align: center;
    width: 33%;
    background: ${props => (props.index % 2 ? props.theme.darkBlue : 'white')};
    img {
      width: 100%;
    }
  }
  @media ${device.tablet} {
    .container {
      width: 50%;
    }
  }
`
const Text = styled.div`
  line-height: 1rem;
  display: flex;
  align-items: center;
  color: ${props => props.color};
  position: absolute;
  top: 0;
  font-size: 15px;
  font-weight: 200;
  height: 100%;
  p {
    padding: 0 20px;
  }
`

function TileSection({header, data}) {
  const [language] = useLanguage()

  const mapCards = data.map((card, i) => {
    return (
      <div key={i} className="container">
        <img src={card.icon} />
        <Text color={card.color}>
          <p>{card.text[language]}</p>
        </Text>
      </div>
    )
  })
  return (
    <SectionContainer>
      <Description>{header[language]}</Description>
      <Divider />
      <TileContainer>{mapCards}</TileContainer>
    </SectionContainer>
  )
}

export default TileSection
