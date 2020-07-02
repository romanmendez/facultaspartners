import React, {useState} from 'react'
import styled from 'styled-components'
import {profiles} from '../../data/text'

const SectionContainer = styled.div`
  background: ${props =>
    props.header === 'Partners' ? props.theme.lightBlue : 'none'};
  background-size: 100%;
  padding: 40px 100px;
`
const ProfilesContainer = styled.div`
  margin: 0 auto;
  width: 600px;
  display: flex;
`
const ButtonsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`
const Header = styled.div`
  font-size: 20px;
  padding: 10px 0;
  text-align: center;
  color: ${props => props.theme.darkBlue};
  text-transform: uppercase;
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
  width: 130px;
  max-height: 140px;
  margin: 20px 5px;
  text-align: center;
  line-height: 1rem;
  img {
    object-fit: cover;
    height: 100px;
    width: 130px;
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
function ProfileCard({name, title, img}) {
  return (
    <Card>
      <img src={img} />
      <h4>{name}</h4>
      <p>{title}</p>
    </Card>
  )
}

function Team({header}) {
  const [location, setLocation] = useState('us')

  const handleSelection = e => {
    setLocation(e)
  }
  const mapProfiles = profiles.map(p => {
    const isLocation = p.location === location
    const isTitle = p.title.includes(header.substring(0, p.title.length - 1))

    if (isLocation && isTitle)
      return (
        <ProfileCard name={p.name} title={p.title} img={p.img} key={p.img} />
      )
    if (isLocation && isTitle)
      return (
        <ProfileCard name={p.name} title={p.title} img={p.img} key={p.img} />
      )
  })

  return (
    <SectionContainer {...{header}}>
      <Header>{header}</Header>
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
