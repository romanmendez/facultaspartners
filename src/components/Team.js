import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context';
import { theme } from '../styles/theme';
import Box from '../layout/Box';
import Cluster from '../layout/Cluster';
import Stack from '../layout/Stack';
import Frame from '../layout/Frame';
import Imposter from '../layout/Imposter';

const Grid = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: ${props => props.theme.scale(props.gap)};
  grid-template-columns: repeat(auto-fit, minmax(5rem, 20rem));
  max-width: 70rem;
`;
const PopupWindow = styled.div`
  width: minmax(100%, 80ch);
  padding: ${props => props.theme.scale(1)};
  > * + * {
    margin-top: ${props => props.theme.scale(1)};
  }
`;
const PopupGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.scale(1)};
  > * {
    flex-grow: 1;
    flex-basis: calc((45rem - 100%) * 999);
  }
`;
const Navigation = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  > i {
    font-size: ${props => props.theme.scale(2)};
    padding-right: ${props => props.theme.scale(1)};
    padding-left: ${props => props.theme.scale(1)};
    color: ${props => props.theme.darkBlue};
    cursor: pointer;
    &[disabled] {
      pointer-events: none;
      opacity: 0.5;
    }
  }
`;

function Team({ header, members }) {
  const [language] = useLanguage();
  const [team, setTeam] = useState();
  const [popup, setPopup] = useState({
    open: false,
  });

  useEffect(() => {
    if (language === 'en')
      setTeam({
        name: 'us',
        members: members.filter(member => member.team === 'us'),
      });
    if (language === 'es')
      setTeam({
        name: 'eu',
        members: members.filter(member => member.team === 'eu'),
      });
  }, [language, members]);

  const handleSelection = e => {
    setTeam({ name: e, members: members.filter(member => member.team === e) });
  };

  const mapMembers = team?.members.map((member, i) => (
    <Stack
      space={-2}
      key={member.email}
      onClick={() => setPopup({ open: true, content: member, count: i })}
      style={{ cursor: 'pointer' }}
    >
      <Frame width={4} height={3}>
        <img alt={`head shot of ${member.name}`} src={member.img} />
      </Frame>
      <h3 style={{ color: `${theme.darkBlue}` }}>{member.name}</h3>
      <p>{member.title[language]}</p>
    </Stack>
  ));

  return (
    <Box background={theme.lightBlue} width='100%'>
      <Stack space={1} justify='center'>
        <h2 style={{ color: `${theme.darkBlue}` }}>{header[language]}</h2>
        <Cluster gap={-1} justify='center'>
          <Box
            background={team?.name === 'us' ? theme.darkBlue : 'none'}
            onClick={() => handleSelection('us')}
            borderWidth={-5}
            borderColor={theme.darkBlue}
            radius={-1}
            padding={-1}
            button={true}
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
            button={true}
          >
            <span
              style={{
                color: `${team?.name === 'eu' ? 'white' : theme.darkBlue}`,
              }}
            >
              Europe
            </span>
          </Box>
        </Cluster>
        <Box width='100%' padding={0}>
          <Grid gap={1}>{mapMembers}</Grid>
        </Box>
      </Stack>
      {popup.open && (
        <Imposter>
          <div>
            <PopupWindow>
              <PopupGrid side='left' space={1}>
                <div>
                  <Frame width={4} height={3}>
                    <img src={popup.content.img} />
                  </Frame>
                </div>
                <div>
                  <h3 style={{ color: `${theme.darkBlue}` }}>
                    {popup.content.name}
                  </h3>
                  <p>{popup.content.title[language]}</p>
                  <p style={{ marginTop: theme.scale(1) }}>
                    {popup.content.bio[language]}
                  </p>
                </div>
              </PopupGrid>
              <Navigation>
                <i
                  className='material-icons'
                  style={{ transform: 'rotate(180deg)' }}
                  disabled={popup.count === 0}
                  onClick={() =>
                    setPopup({
                      ...popup,
                      content: team.members[popup.count - 1],
                      count: popup.count - 1,
                    })
                  }
                >
                  forward
                </i>
                <i
                  className='material-icons'
                  onClick={() => setPopup({ open: false })}
                >
                  cancel
                </i>
                <i
                  className='material-icons'
                  disabled={popup.count === team?.members.length - 1}
                  onClick={() => {
                    console.log(popup);
                    setPopup({
                      ...popup,
                      content: team.members[popup.count + 1],
                      count: popup.count + 1,
                    });
                  }}
                >
                  forward
                </i>
              </Navigation>
            </PopupWindow>
          </div>
        </Imposter>
      )}
    </Box>
  );
}

export default Team;
