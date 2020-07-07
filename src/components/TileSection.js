import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../styles/components/SectionHeader'
import Divider from '../styles/components/Divider'
import Text from '../styles/components/Text'
import {useLanguage} from '../context.js'
import {device} from '../styles/theme'

const SectionContainer = styled.div`
  padding: 50px;
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
    background: ${props => (props.index % 2 ? props.theme.darkBlue : 'white')};
    img {
      width: 100%;
      border-radius: 5px;
    }
  }
  @media (min-width: 900px) {
    .container {
      width: 33%;
    }
  }
  @media ${device.medium} {
    .container {
      width: 100%;
      img {
        height: 100px;
      }
    }
  }
  @media (min-width: 900px) and (max-width: 1150px) {
    #card1 {
      order: 1;
    }
    #card2 {
      order: 2;
    }
    #card3 {
      order: 4;
    }
    #card4 {
      order: 3;
    }
    #card5 {
      order: 5;
    }
    #card6 {
      order: 6;
    }
  }
`
const TextContainer = styled.div`
  line-height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.5rem;
  height: 100%;
  width: 100%;
  p {
    padding: 0 20px;
  }
`

function TileSection({header, data}) {
  const [language] = useLanguage()

  const mapCards = data.map((card, i) => {
    return (
      <div key={i} className="container" id={'card' + (i + 1)}>
        <img src={card.icon} />
        <TextContainer>
          <Text color={card.color}>{card.text[language]}</Text>
        </TextContainer>
      </div>
    )
  })
  return (
    <SectionContainer>
      <SectionHeader>{header[language]}</SectionHeader>
      <Divider />
      <TileContainer>{mapCards}</TileContainer>
    </SectionContainer>
  )
}

export default TileSection
