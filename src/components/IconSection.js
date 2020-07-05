import React from 'react'
import styled from 'styled-components'
import {useLanguage} from '../context.js'

const SectionContainer = styled.div`
  margin: 50px 100px;
`

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
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
  }
  img {
    margin: 20px auto;
    display: flex;
  }
`
const Text = styled.p`
  top: 0;
  font-size: 15px;
  font-weight: 200;
`

function IconSection({header, data}) {
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
      <IconContainer>{mapCards}</IconContainer>
    </SectionContainer>
  )
}

export default IconSection
