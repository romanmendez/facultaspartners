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
    border: 1px solid red;
    flex-grow: 1;
    position: relative;
    text-align: center;
    background: ${props => (props.index % 2 ? props.theme.darkBlue : 'white')};
    img {
      width: 100%;
      border-radius: 5px;
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
