import React, {useState} from 'react'
import styled from 'styled-components'
import SectionTitle from '../styles/components/SectionTitle'
import {useLanguage} from '../context'
import {theme} from '../styles/theme'

const SectionContainer = styled.div`
  background: ${props => props.theme.lightBlue};
  background-size: 100%;
  padding: 40px 50px;
`
const ProfilesContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`
const ButtonsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`
const Button = styled.div`
  width: 85px;
  border: 1px solid ${props => props.theme.darkBlue};
  background: ${props => (props.selected ? props.theme.darkBlue : 'none')};
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
  border-radius: 5px;
  padding: 10px 0;
  margin: 10px 5px;
  color: ${props => (props.selected ? 'white' : props.theme.darkBlue)};
  cursor: pointer;
  user-select: none;
`
const Card = styled.div`
  width: 200px;
  margin: 20px 10px;
  text-align: center;
  line-height: 1rem;
  img {
    object-fit: cover;
    height: 150px;
    width: 100%;
    border-radius: 5px;
  }
  h4 {
    margin-top: 10px;
    font-size: 20px;
    color: ${props => props.theme.darkBlue};
  }
  p {
    font-size: 16px;
    font-weight: 300;
    color: ${props => props.theme.grey};
  }
`
function ProfileCard({name, title, img}) {
  return (
    <Card>
      <img src={img} />
      <h4>{name}</h4>
      <p>{title}</p>
    </Card>
  )
}

function Team({header, members}) {
  const [language] = useLanguage()
  const [location, setLocation] = useState('us')

  const handleSelection = e => {
    setLocation(e)
  }
  const mapProfiles = members.map(p => {
    const isLocation = p.location === location
    const isTitle = p.title[language].includes(
      header[language].substring(0, p.title.length - 1),
    )

    if (isLocation && isTitle)
      return (
        <ProfileCard
          name={p.name}
          title={p.title[language]}
          img={p.img}
          key={p.img}
        />
      )
    if (isLocation && isTitle)
      return (
        <ProfileCard
          name={p.name}
          title={p.title[language]}
          img={p.img}
          key={p.img}
        />
      )
  })

  return (
    <SectionContainer>
      <SectionTitle color={theme.darkBlue}>{header[language]}</SectionTitle>
      <ButtonsContainer>
        <Button
          selected={location === 'us'}
          onClick={() => handleSelection('us')}
        >
          USA
        </Button>
        <Button
          selected={location === 'eu'}
          onClick={() => handleSelection('eu')}
        >
          Europe
        </Button>
      </ButtonsContainer>
      <ProfilesContainer>{mapProfiles}</ProfilesContainer>
    </SectionContainer>
  )
}

export default Team
