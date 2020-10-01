import React from 'react'
import styled from 'styled-components'
import {useLanguage} from '../context.js'
import Center from '../layout/Center'
import Stack from '../layout/Stack'
import Switcher from '../layout/Switcher'
import Box from '../layout/Box'

const Icon = styled.i`
  color: ${props => props.theme.darkBlue};
  font-size: 3rem;
`

function IconSection({header, data}) {
  const [language] = useLanguage()
  const mapCards = data.map((card, i) => {
    return (
      <Stack space={1} key={i}>
        <Icon className="material-icons">{card.icon}</Icon>
        <p number={i}>{card.text[language]}</p>
      </Stack>
    )
  })
  return (
    <Box>
      <Stack space={3}>
        <Center>
          <p>{header[language]}</p>
        </Center>
        <Switcher basis={8} margin={1} maxWidth={8}>
          {mapCards}
        </Switcher>
      </Stack>
    </Box>
  )
}

export default IconSection
