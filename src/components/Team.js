import React, {useState, useEffect} from 'react'
import {useLanguage} from '../context'
import {theme} from '../styles/theme'
import Box from '../layout/Box'
import Center from '../layout/Center'
import Switcher from '../layout/Switcher'
import Stack from '../layout/Stack'
import Frame from '../layout/Frame'

function Team({header, members}) {
  const [language] = useLanguage()
  const [team, setTeam] = useState()

  useEffect(() => {
    if (language === 'en')
      setTeam({
        name: 'us',
        members: members.filter(member => member.team === 'us'),
      })
    if (language === 'es')
      setTeam({
        name: 'eu',
        members: members.filter(member => member.team === 'eu'),
      })
  }, [language])

  const handleSelection = e => {
    setTeam({name: e, members: members.filter(member => member.team === e)})
  }
  const mapMembers = team?.members.map(member => (
    <Stack space={-2}>
      <Frame width={4} height={3}>
        <img src={member.img} />
      </Frame>
      <h3>{member.name}</h3>
      <p>{member.title[language]}</p>
    </Stack>
  ))

  return (
    <Box background={theme.lightBlue} width="100%">
      <Center>
        <Stack space={1}>
          <h2 style={{color: `${theme.darkBlue}`}}>{header[language]}</h2>
          <Switcher basis={1} margin={-2}>
            <Box
              background={team?.name === 'us' ? theme.darkBlue : 'none'}
              onClick={() => handleSelection('us')}
              borderWidth={-5}
              borderColor={theme.darkBlue}
              radius={-1}
              padding={-1}
            >
              <span
                style={{
                  color: `${team?.name === 'us' ? 'white' : theme.darkBlue}`,
                }}
              >
                USA
              </span>
            </Box>
            <Box
              background={team?.name === 'eu' ? theme.darkBlue : 'none'}
              onClick={() => handleSelection('eu')}
              borderWidth={-5}
              borderColor={theme.darkBlue}
              radius={-1}
              padding={-1}
            >
              <span
                style={{
                  color: `${team?.name === 'eu' ? 'white' : theme.darkBlue}`,
                }}
              >
                Europe
              </span>
            </Box>
          </Switcher>
          <Switcher basis={6} margin={1}>
            {mapMembers}
          </Switcher>
        </Stack>
      </Center>
    </Box>
  )
}

export default Team
