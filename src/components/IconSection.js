import React from 'react'
import styled from 'styled-components'
import {useLanguage} from '../context.js'
import Center from '../layout/Center'
import Stack from '../layout/Stack'
import Switcher from '../layout/Switcher'

function IconSection({header, data}) {
  const [language] = useLanguage()
  const mapCards = data.map((card, i) => {
    return (
      <div key={i}>
        <img src={card.icon} />
        <p number={i}>{card.text[language]}</p>
      </div>
    )
  })
  return (
    <Stack space={1}>
      <Center>
        <p>{header[language]}</p>
      </Center>
      <Switcher basis={8} margin={1} maxWidth={8}>
        {mapCards}
      </Switcher>
    </Stack>
  )
}

export default IconSection
