import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context';
import { Link } from 'react-scroll';
import Stack from '../layout/Stack';

const TextLink = styled.p`
  font-size: ${props => props.theme.scale(0)};
  font-weight: bold;
  color: ${props => props.theme.darkBlue};
  text-transform: uppercase;
  cursor: pointer;
`;

const shadow = '0.1rem';
const Icon = styled.i`
  display: flex;
  position: absolute;
  background: white;
  filter: drop-shadow(${shadow} ${shadow} 0.3rem grey);
  padding: ${props => props.theme.scale(-2)};
  border-radius: ${props => props.theme.scale(-2)};
  right: ${props => props.theme.scale(-1)};
  color: ${props => props.theme.darkBlue};
  font-size: 1.5rem;
  cursor: pointer;
`;

const PopUp = styled.div`
  background: white;
  filter: drop-shadow(${shadow} ${shadow} 0.3rem grey);
  position: relative;
  right: ${props => props.theme.scale(3)};
  padding: ${props => props.theme.scale(1)} ${props => props.theme.scale(2)};
  border-radius: ${props => props.theme.scale(-2)};
`;

const Menu = styled.div`
  position: fixed;
  top: ${props => props.theme.scale(-1)};
  right: ${props => props.theme.scale(-1)};
`;

export default function BurgerMenu({ links }) {
  const [open, setOpen] = React.useState(false);
  const [language] = useLanguage();

  const handleClick = () => {
    setOpen(!open);
  };

  const mapLinks = links.map((link, i) => (
    <Link
      key={link.text[language]}
      to={link.link}
      smooth={true}
      spy={true}
      onClick={handleClick}
    >
      <TextLink>{link.text[language]}</TextLink>
    </Link>
  ));

  return (
    <Menu>
      {open ? (
        <Icon className='material-icons' onClick={handleClick}>
          close
        </Icon>
      ) : (
        <Icon className='material-icons' onClick={handleClick}>
          menu
        </Icon>
      )}
      {open && (
        <PopUp>
          <Stack space={1}>{mapLinks}</Stack>
        </PopUp>
      )}
    </Menu>
  );
}
