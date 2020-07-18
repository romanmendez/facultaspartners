import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../layout/SectionHeader'
import Divider from '../layout/Divider'
import Text from '../layout/Text'
import {useLanguage} from '../context.js'
import {device} from '../styles/theme'

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  * + * {
    margin-top: ${props => props.theme.scale(props.space)};
  }
  :only-child {
    height: 100%;
  }
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  padding: ${props => props.theme.scale(1)};
  margin: ${props => props.theme.negativeScale(1)};
  background-image: url(${props => props.img});
`
const Switcher = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > * {
    min-height: ${props => props.theme.scale(props.height) || 'auto'};
    border-radius: ${props => props.theme.scale(props.radius)};
    flex-grow: 1;
    flex-basis: ${props => props.theme.scale(8)};
    margin: ${props => props.theme.scale(1)};
    max-width: ${props => props.theme.scale(8)};
    overflow: hidden;
    text-align: center;
  }
`

function TileSection({header, data}) {
  const [language] = useLanguage()

  const mapCards = data.map((card, i) => {
    return (
      <Box key={i} img={card.icon} id={'card' + (i + 1)}>
        <Text>{card.text[language]}</Text>
      </Box>
    )
  })
  return (
    <Stack space={1}>
      <SectionHeader>{header[language]}</SectionHeader>
      <Divider />
      <Switcher height={5} radius={1}>
        {mapCards}
      </Switcher>
    </Stack>
  )
}

export default TileSection
