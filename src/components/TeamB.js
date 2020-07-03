import React, {useState} from 'react'
import styled from 'styled-components'
import {profiles} from '../../data/text'
import {useLanguage} from '../context'

const SectionContainer = styled.div`
  background: ${props => props.theme.lightBlue};
  background-size: 100%;
  padding: 40px 100px;
`
const ProfilesContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`
const Header = styled.div`
  font-size: 20px;
  padding: 10px 0;
  text-align: center;
  color: ${props => props.theme.darkBlue};
  text-transform: uppercase;
`
const Card = styled.div`
  width: 130px;
  max-height: 140px;
  margin: 20px 5px;
  text-align: center;
  line-height: 1rem;
  img {
    object-fit: cover;
    height: 100px;
    width: 100%;
    border-radius: 5px;
  }
  h4 {
    font-size: 14px;
    color: ${props => props.theme.darkBlue};
  }
  p {
    font-size: 12px;
    font-weight: 200;
    color: ${props => props.theme.grey};
  }
`
function ProfileCard({name, title, location, img}) {
  return (
    <Card>
      <img src={img} />
      <h4>{name}</h4>
      <p>
        {title} ({location.toUpperCase()})
      </p>
    </Card>
  )
}

function Team() {
  const [language] = useLanguage()
  const mapProfiles = profiles.map((p, i) => (
    <ProfileCard
      name={p.name}
      title={p.title[language]}
      location={p.location}
      img={p.img}
      key={i + p.img}
    />
  ))

  return (
    <SectionContainer>
      <Header>Team</Header>
      <ProfilesContainer>{mapProfiles}</ProfilesContainer>
    </SectionContainer>
  )
}

export default Team
