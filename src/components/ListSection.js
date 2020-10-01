import React from 'react'
import styled from 'styled-components'
import {theme} from '../styles/theme'
import {useLanguage} from '../context'
import Center from '../layout/Center'
import Stack from '../layout/Stack'
import Box from '../layout/Box'
import Frame from '../layout/Frame'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  max-width: 80ch;
`

function ListSection({header, subheader, list}) {
  const [language] = useLanguage()
  const mapList = list.map((item, i) => (
    <Grid key={i + header}>
      <div
        style={{
          justifySelf: 'center',
          background: 'white',
        }}
      >
        <img src={item.img.src} style={item.img.margin} />
      </div>
      <div className="text">
        <h3 className="color:white">{item.header[language]}</h3>
        <p className="color:white font-size:small">{item.text[language]}</p>
      </div>
    </Grid>
  ))
  return (
    <Box background={theme.darkBlue} color="white" padding={2}>
      <Stack space={1} justify="center">
        <h2 className="color:white">{header[language]}</h2>
        <Center>
          <p className="color:white">{subheader[language]}</p>
        </Center>
        <Stack space={1} justify="center">
          {mapList}
        </Stack>
      </Stack>
    </Box>
  )
}

export default ListSection
