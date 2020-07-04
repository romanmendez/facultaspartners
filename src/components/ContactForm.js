import React, {useState} from 'react'
import styled from 'styled-components'
import {useForm, Controller} from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import FormLabel from '@material-ui/core/FormLabel'
import MenuItem from '@material-ui/core/MenuItem'
import {useLanguage} from '../context'
import HeaderBtn from './HeaderBtn'

const SectionContainer = styled.div`
  background: ${props => props.theme.lightBlue};
  background-size: 100%;
  padding: 40px 100px;
  .input-field {
    width: 100%;
    margin: 10px;
  }
`

const Header = styled.h2`
  font-size: 20px;
  margin-bottom: 40px;
  padding: 10px 0;
  text-align: center;
  color: ${props => props.theme.darkBlue};
  text-transform: uppercase;
`

const ContactForm = ({header, inputFields, emails}) => {
  const [language] = useLanguage()
  const {register, control, watch} = useForm()
  const form = watch()

  const mapContactEmails = emails.map(e => (
    <MenuItem key={e.email} value={e.email}>
      {e.name}
    </MenuItem>
  ))

  console.log(form)

  return (
    <SectionContainer>
      <Header>{header[language]}</Header>
      <Controller
        as={<Select>{mapContactEmails}</Select>}
        name="to"
        control={control}
        variant="filled"
        defaultValue={emails[0].email}
        className="input-field"
      />
      <Controller
        as={TextField}
        name="from"
        control={control}
        variant="filled"
        label={inputFields.from[language]}
        defaultValue=""
        className="input-field"
      />
      <Controller
        as={TextField}
        name="subject"
        control={control}
        variant="filled"
        label={inputFields.subject[language]}
        defaultValue=""
        className="input-field"
      />
      <Controller
        as={TextField}
        name="message"
        control={control}
        multiline
        rows={5}
        variant="filled"
        label={inputFields.message[language]}
        defaultValue=""
        className="input-field"
      />
      <a href={`mailto:${form.to}&subject=${form.subject}&body=${form.body}`}>
        Send
      </a>
    </SectionContainer>
  )
}

export default ContactForm
