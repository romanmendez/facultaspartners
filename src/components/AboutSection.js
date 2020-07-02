import React from 'react'
import styled from 'styled-components'
import {about} from '../../data/text.js'
import dna from '../../assets/dna.svg'
import cert from '../../assets/experience.svg'
import link from '../../assets/link.svg'
import handshake from '../../assets/agreement.svg'

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
const CardContainer = styled.div`
  display: flex;
`
const Card = styled.div`
  width: 25%;
  margin: 0 20px;
  p {
    font-size: 12px;
    font-weight: 200;
  }
`
const Icon = styled.img`
  margin: 20px auto;
  display: flex;
`

function AboutCard({icon, text}) {
  return (
    <Card>
      <Icon src={icon} />
      <p>{text}</p>
    </Card>
  )
}

function AboutSection() {
  return (
    <SectionContainer>
      <Description>{about.description}</Description>
      <Divider />
      <CardContainer>
        <AboutCard icon={dna} text={about.card1} />
        <AboutCard icon={cert} text={about.card2} />
        <AboutCard icon={link} text={about.card3} />
        <AboutCard icon={handshake} text={about.card4} />
      </CardContainer>
    </SectionContainer>
  )
}

export default AboutSection
