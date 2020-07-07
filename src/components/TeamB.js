import React, {useState} from 'react'
import styled from 'styled-components'
import Popover from '@material-ui/core/Popover'
import {useLanguage} from '../context'
import SectionTitle from '../styles/components/SectionTitle'
import {theme} from '../styles/theme'

const SectionContainer = styled.div`
  background: ${props => props.theme.lightBlue};
  background-size: 100%;
  padding: 40px 50px;
`
const ProfilesContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
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
    font-size: 16px;
    color: ${props => props.theme.darkBlue};
  }
  p {
    font-size: 14px;
    font-weight: 300;
    color: ${props => props.theme.grey};
  }
`
const Bio = styled.div`
  line-height: 1rem;
  padding: 10px 20px;
  background: rgb(0, 0, 0, 0.8);
  color: white;
  font-size: 13px;
  font-weight: 200;
  width: 200px;
`

function ProfileCard({name, title, location, bio, img}) {
  const [anchorEl, setAnchorEl] = useState()
  console.log(anchorEl)

  const handleOpen = e => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'bio' : undefined

  return (
    <>
      <Card onClick={handleOpen}>
        <img src={img} />
        <h4>{name}</h4>
        <p>
          {title} ({location.toUpperCase()})
        </p>
      </Card>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <Bio>{bio}</Bio>
      </Popover>
    </>
  )
}

function Team({header, members}) {
  const [language] = useLanguage()
  const mapMembers = members.map((p, i) => (
    <ProfileCard
      name={p.name}
      title={p.title[language]}
      location={p.location}
      img={p.img}
      bio={p.bio[language]}
      key={i + p.img}
    />
  ))

  return (
    <SectionContainer>
      <SectionTitle color={theme.darkBlue}>{header[language]}</SectionTitle>
      <ProfilesContainer>{mapMembers}</ProfilesContainer>
    </SectionContainer>
  )
}

export default Team
