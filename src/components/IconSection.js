import React from 'react'
import styled from 'styled-components'
import {useLanguage} from '../context.js'
import {device} from '../styles/theme'
import SectionHeader from '../styles/components/SectionHeader'
import Divider from '../styles/components/Divider'
import Text from '../styles/components/Text'

const SectionContainer = styled.div`
  margin: 50px 50px;
`
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  div {
    min-width: 200px;
    max-width: 300px;
    margin: 0 20px;
  }
  img {
    margin: 20px auto;
    display: flex;
  }
  @media (max-width: 1024px) {
    flex-flow: row wrap;
  }
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
      <SectionHeader>{header[language]}</SectionHeader>
      <Divider />
      <IconContainer>{mapCards}</IconContainer>
    </SectionContainer>
  )
}

export default IconSection
