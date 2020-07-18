import React from 'react'
import styled from 'styled-components'
import {useLanguage} from '../context'
import SectionHeader from '../layout/SectionHeader'
import SectionTitle from '../layout/SectionTitle'

const SectionContainer = styled.div`
  background: ${props => props.theme.darkBlue};
  background-size: 100%;
  padding: 40px 50px;
  color: white;
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
  align-items: top;
  .image {
    background: white;
    max-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 20px;
    img {
      object-fit: cover;
    }
  }
  .text {
    margin-left: 20px;
    h3 {
      font-size: 20px;
      line-height: 2rem;
    }
    p {
      font-size: 14px;
      font-weight: 300;
      line-height: 1.5rem;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column;
    .text {
      margin-left: 0;
    }
    .image {
      img {
        max-width: 80%;
      }
    }
  }
`

function ListSection({header, subheader, list}) {
  const [language] = useLanguage()
  const mapList = list.map((item, i) => (
    <ListItem key={i + header}>
      <div className="image">
        <img src={item.img.src} style={item.img.margin} />
      </div>
      <div className="text">
        <h3>{item.header[language]}</h3>
        <p>{item.text[language]}</p>
      </div>
    </ListItem>
  ))
  return (
    <SectionContainer>
      <SectionTitle>{header[language]}</SectionTitle>
      <SectionHeader>{subheader[language]}</SectionHeader>
      <Divider />
      <List>{mapList}</List>
    </SectionContainer>
  )
}

export default ListSection
