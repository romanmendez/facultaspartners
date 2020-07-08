import React from 'react'
import styled from 'styled-components'
import {useLanguage} from '../context'
import spanish from '../../assets/spanish-flag.png'
import english from '../../assets/uk-flag.png'

const Button = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  color: white;
  font-size: 12px;
  text-align: center;
  img {
    margin: 0 5px;
    width: 20px;
    height: 20px;
  }
  p {
    width: 2rem;
    color: white;
    border-radius: 5px;
    :hover {
      opacity: 1;
    }
  }
  .unselected {
    opacity: 0.2;
  }
  .selected {
    border: 2px solid white;
    border-radius: 50%;
  }
`

function LanguageBtn() {
  const [language, setLanguage] = useLanguage()
  const handleSelect = selection => {
    setLanguage(selection)
    localStorage.setItem('language', JSON.stringify(selection))
  }

  return (
    <Button>
      <img
        src={english}
        className={language === 'en' ? 'selected' : 'unselected'}
        id="en"
        onClick={() => handleSelect('en')}
      />
      <img
        src={spanish}
        className={language === 'es' ? 'selected' : 'unselected'}
        id="es"
        onClick={() => handleSelect('es')}
      />
    </Button>
  )
}

export default LanguageBtn
