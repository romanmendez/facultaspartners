import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { useLanguage } from '../context';
import Center from '../layout/Center';
import Stack from '../layout/Stack';
import Box from '../layout/Box';

const Grid = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.scale(1)};
  grid-template-columns: 30% 70%;
  max-width: 80ch;
`;

const ImageContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: white;
  border-radius: ${props => props.theme.scale(-1)};
`;

function ListSection({ header, subheader, list }) {
  const [language] = useLanguage();
  const mapList = list.map((item, i) => (
    <Grid key={i + header}>
      <ImageContainer>
        <img
          alt={`${item.header[language]} logo`}
          src={item.img.src}
          style={item.img.style}
        />
      </ImageContainer>
      <div className='text'>
        <h3 className='color:white'>{item.header[language]}</h3>
        <p className='color:white font-size:small'>{item.text[language]}</p>
      </div>
    </Grid>
  ));
  return (
    <Box background={theme.darkBlue} color='white' padding={2}>
      <Stack space={1} justify='center'>
        <h2 className='color:white'>{header[language]}</h2>
        <Center>
          <p className='color:white'>{subheader[language]}</p>
        </Center>
        <Stack space={1} justify='center'>
          {mapList}
        </Stack>
      </Stack>
    </Box>
  );
}

export default ListSection;
