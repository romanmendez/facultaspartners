import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import SectionTitle from '../styles/components/SectionTitle'
import Text from '../styles/components/Text'
import Modal from '@material-ui/core/Modal'
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
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  border-radius: 5px;
  padding: 10px 0;
  margin: 10px 5px;
  color: ${props => (props.selected ? 'white' : props.theme.darkBlue)};
  cursor: pointer;
  user-select: none;
`
const PreviewCard = styled.div`
  width: 200px;
  margin: 20px 10px;
  text-align: center;
  line-height: 1rem;
  img {
    object-fit: cover;
    height: 200px;
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
const FullCard = styled.div`
  line-height: 1rem;
  padding: 30px 50px;
  background: white;
  font-size: 13px;
  font-weight: 200;
  max-width: 500px;
  outline: 0;
  margin: 50px auto;
  border-radius: 5px;
  .header {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 10px;
  }
  img {
    object-fit: cover;
    height: 150px;
    max-width: 300px;
    border-radius: 5px;
    margin: 0 20px 20px 0;
  }
  h4 {
    margin-top: 10px;
    font-size: 25px;
    color: ${props => props.theme.darkBlue};
  }
`

function ProfileCard({name, title, bio, img}) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <PreviewCard>
      <img src={img} onClick={handleOpen} />
      <h4>{name}</h4>
      <Text>{title}</Text>
      <Modal open={open} onClose={handleClose}>
        <FullCard>
          <div className="header">
            <img src={img} onClick={handleOpen} />
            <div>
              <h4>{name}</h4>
              <Text>{title}</Text>
            </div>
          </div>
          <Text>{bio}</Text>
        </FullCard>
      </Modal>
    </PreviewCard>
  )
}

function Team({header, members}) {
  const [language] = useLanguage()
  const [team, setTeam] = useState()

  useEffect(() => {
    setTeam(language === 'es' ? 'eu' : 'us')
  }, [language])

  const handleSelection = e => {
    setTeam(e)
  }
  const partners = members.filter(m => m.title[language].includes('Partner'))
  const advisors = members.filter(m => m.title[language].includes('Advisor'))
  const mapProfiles = members =>
    members.map(p => {
      const isTeam = p.team === team

      if (isTeam)
        return (
          <ProfileCard
            name={p.name}
            title={p.title[language]}
            bio={p.bio[language]}
            img={p.img}
            key={p.img}
          />
        )
      if (isTeam)
        return (
          <ProfileCard
            name={p.name}
            title={p.title[language]}
            bio={p.bio[language]}
            img={p.img}
            key={p.img}
          />
        )
    })

  return (
    <SectionContainer>
      <SectionTitle color={theme.darkBlue}>{header[language]}</SectionTitle>
      <ButtonsContainer>
        <Button selected={team === 'us'} onClick={() => handleSelection('us')}>
          USA
        </Button>
        <Button selected={team === 'eu'} onClick={() => handleSelection('eu')}>
          Europe
        </Button>
      </ButtonsContainer>
      <ProfilesContainer>{mapProfiles(partners)}</ProfilesContainer>
      <ProfilesContainer>{mapProfiles(advisors)}</ProfilesContainer>
    </SectionContainer>
  )
}

export default Team
