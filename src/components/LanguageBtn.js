import React from 'react'
import styled from 'styled-components'
import {useLanguage} from '../context'

const Button = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  color: white;
  font-size: 12px;
  text-align: center;
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
    background: rgb(255, 255, 255, 0.2);
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
      <p
        className={language === 'en' ? 'selected' : 'unselected'}
        id="en"
        onClick={() => handleSelect('en')}
      >
        EN
      </p>
      <p
        className={language === 'es' ? 'selected' : 'unselected'}
        id="es"
        onClick={() => handleSelect('es')}
      >
        ES
      </p>
    </Button>
  )
}

export default LanguageBtn
