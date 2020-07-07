import React, {useState} from 'react'
import styled from 'styled-components'
import {useForm, Controller} from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import {useLanguage} from '../context'
import SectionTitle from '../styles/components/SectionTitle'
import {theme} from '../styles/theme'
import logoBlue from '../../assets/logoblue.png'

const SectionContainer = styled.div`
  background: ${props => props.theme.lightBlue};
  background-size: 100%;
  padding: 40px 50px;
  .input-field {
    width: 100%;
    margin: 10px;
  }
`

const ContactLink = styled.div`
  min-height: 50px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 1.5rem;
  margin: 30px 0 0 0;
  p {
    font-size: 24px;
  }
  a {
    color: ${props => props.theme.darkBlue};
  }
`
const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  max-width: 100%;
  img {
    max-width: 70%;
  }
`

const ContactForm = ({header, inputFields, emails}) => {
  const [language] = useLanguage()

  return (
    <SectionContainer>
      <SectionTitle color={theme.darkBlue}>{header[language]}</SectionTitle>
      <ContactLink>
        <p>Miguel Mendez</p>
        <a href="mailto:mmendez@facultaspartners.com">
          mmendez@facultaspartners.com (US)
        </a>
      </ContactLink>
      <ContactLink>
        <p>Enrique Sainz Martinez</p>
        <a href="mailto:esainz@facultaspartners.com">
          esainz@facultaspartners.com (EU)
        </a>
      </ContactLink>
      <Logo>
        <img src={logoBlue} />
      </Logo>
    </SectionContainer>
  )
}

export default ContactForm
