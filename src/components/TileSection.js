import React from 'react'
import styled from 'styled-components'
import Center from '../layout/Center'
import Box from '../layout/Box'
import Stack from '../layout/Stack'
import {useLanguage} from '../context.js'
import Switcher from '../layout/Switcher'

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
    <Box>
      <Stack space={3}>
        <Center>
          <p>{header[language]}</p>
        </Center>
        <Center>
          <Switcher maxWidth={8} margin={1}>
            {mapCards}
          </Switcher>
        </Center>
      </Stack>
    </Box>
  )
}

export default TileSection
