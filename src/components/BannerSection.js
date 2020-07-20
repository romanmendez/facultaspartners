import React, {useRef, useEffect, useState} from 'react'
import {theme} from '../styles/theme'
import {useLanguage} from '../context'
import Box from '../layout/Box'
import Center from '../layout/Center'
import Stack from '../layout/Stack'

function BannerSection({header, text, img, side}) {
  const [language] = useLanguage()

  return (
    <Stack space={0}>
      <Box background={theme.lightBlue}>
        <Center>
          <h2 style={{color: `${theme.darkBlue}`}}>{header[language]}</h2>
        </Center>
      </Box>
      <Box img={img.small}>
        <p style={{color: 'white'}}>{text[language]}</p>
      </Box>
    </Stack>
  )
}

export default BannerSection
