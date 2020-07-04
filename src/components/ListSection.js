import React from 'react'
import styled from 'styled-components'
import {useLanguage} from '../context'

const SectionContainer = styled.div`
  background: ${props => props.theme.darkBlue};
  background-size: 100%;
  padding: 40px 100px;
  color: white;
`
const Header = styled.h2`
  font-size: 20px;
  font-weight: 300;
  padding: 10px 0;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`
const Subheader = styled.p`
  font-size: 12px;
  font-weight: 300;
  width: 500px;
  text-align: center;
  margin: 0 auto;
`
const Divider = styled.div`
  height: 4px;
  width: 85px;
  margin: 20px auto;
  background: white;
  border-radius: 20px;
`
const List = styled.div`
  margin-top: 50px;
`
const ListItem = styled.div`
  display: flex;
  align-items: center;
  .image {
    background: white;
    height: 100px;
    display: flex;
    align-items: center;
    img {
      object-fit: cover;
    }
  }
  .text {
    margin-left: 20px;
    h3 {
      font-size: 16px;
      line-height: 2rem;
    }
    p {
      font-size: 12px;
      font-weight: 200;
    }
  }
`

function ListSection({header, subheader, list}) {
  const [language] = useLanguage()
  const mapList = list.map((item, i) => (
    <ListItem key={i + header}>
      <div className="image">
        <img src={item.img} />
      </div>
      <div className="text">
        <h3>{item.header[language]}</h3>
        <p>{item.text[language]}</p>
      </div>
    </ListItem>
  ))
  return (
    <SectionContainer>
      <Header>{header[language]}</Header>
      <Subheader>{subheader[language]}</Subheader>
      <Divider />
      <List>{mapList}</List>
    </SectionContainer>
  )
}

export default ListSection
