import React from 'react'
import styled from 'styled-components'
import Center from '../layout/Center'
import Divider from '../layout/Divider'
import Box from '../layout/Box'
import Switcher from '../layout/Switcher'
import Stack from '../layout/Stack'
import {useLanguage} from '../context.js'

const TileBox = styled(Box)`
  > * {
    color: ${props => props.color};
  }
`

function TileSection({header, data}) {
  const [language] = useLanguage()

  const mapCards = data.map((card, i) => {
    return (
      <TileBox
        key={i}
        img={card.icon}
        minHeight={5}
        radius={-1}
        color={card.color}
      >
        <p>{card.text[language]}</p>
      </TileBox>
    )
  })
  return (
    <Stack space={1}>
      <Center>
        <p>{header[language]}</p>
      </Center>
      <Switcher basis={8} maxWidth={8} margin={-1}>
        {mapCards}
      </Switcher>
    </Stack>
  )
}

export default TileSection
