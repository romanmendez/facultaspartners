import React from 'react'
import styled from 'styled-components'
import {about} from '../../data/text.js'
import {useLanguage} from '../context.js'

const SectionContainer = styled.div`
  margin: 50px 100px;
`

const Description = styled.p`
  font-size: 14px;
  font-weight: 300;
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
const IconContainer = styled.div`
  display: flex;
  div {
    width: 25%;
    margin: 0 20px;
    p {
      font-size: 12px;
      font-weight: 200;
    }
  }
  img {
    margin: 20px auto;
    display: flex;
  }
`
const TileContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin-top: 50px;
  div {
    position: relative;
    text-align: center;
    width: 33%;
    background: ${props => (props.index % 2 ? props.theme.darkBlue : 'white')};
    img {
      width: 100%;
    }
  }
`
const Text = styled.p`
  color: ${props => (props.number % 2 === 0 ? 'white' : 'none')};
  padding: 30px 20px;
  position: absolute;
  top: 0;
  font-size: 12px;
  font-weight: 200;
`

function CardSection({header, type, data}) {
  const [language] = useLanguage()
  const mapCards = data.map((card, i) => {
    return (
      <div key={i}>
        <img src={card.icon} />
        <Text number={i}>{card.text[language]}</Text>
      </div>
    )
  })
  return (
    <SectionContainer>
      <Description>{header[language]}</Description>
      <Divider />
      {type === 'icon' && <IconContainer>{mapCards}</IconContainer>}
      {type === 'tile' && <TileContainer>{mapCards}</TileContainer>}
    </SectionContainer>
  )
}

export default CardSection
