import React, {useState} from 'react'
import styled from 'styled-components'
import {useForm, Controller} from 'react-hook-form'
import emailjs from 'emailjs-com'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import {useLanguage} from '../context'
import SectionTitle from '../styles/components/SectionTitle'
import Text from '../styles/components/Text'
import Loader from '../styles/components/Loader'
import CircularProgress from '@material-ui/core/CircularProgress'
import {theme} from '../styles/theme'

const Form = styled.form`
  background: ${props => props.theme.lightBlue};
  background-size: 100%;
  padding: 40px 100px;
  .input-field {
    width: 100%;
    margin: 10px;
  }
`
const ThankYou = styled.div`
  padding: 40px 100px;
  .text {
    text-align: center;
  }
`
const ButtonContainer = styled.div`
  margin: 10px;
  display: flex;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.darkBlue};
    width: 145px;
    height: 35px;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 5px;
    font-size: 12px;
    text-transform: uppercase;
    color: white;
    :disabled {
      background: #666;
      cursor: initial;
    }
  }
`

const ContactForm = ({header, inputFields, emails, thankyou}) => {
  const [language] = useLanguage()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const {register, control, watch, handleSubmit, reset} = useForm()
  const form = watch()

  const onSubmit = value => {
    setLoading(true)
    emailjs
      .send('gmail', 'facultas_partners', value, 'user_Ly7agQm0zXwaNrHx8D7SB')
      .then(result => {
        setLoading(false)
        setSent(true)
      })
      .catch(error => {
        setLoading(false)
        setError(true)
      })
  }

  const handleBack = e => setSent(false)
  const handleReset = e => {
    reset()
    setSent(false)
  }

  const mapContactEmails = emails.map(e => {
    if (e.email.includes('mendez') || e.email.includes('sainz')) {
      return (
        <MenuItem key={e.email} value={'dev@facultaspartners.com'}>
          {`${e.name} (${e.team.toUpperCase()} Team)`}
        </MenuItem>
      )
    }
  })

  console.log(form)

  return sent ? (
    <ThankYou>
      <SectionTitle color={theme.darkBlue}>
        {thankyou.header[language]}
      </SectionTitle>
      <Text className="text">{thankyou.text[language]}</Text>
      <ButtonContainer style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={handleBack}>{thankyou.back[language]}</button>
      </ButtonContainer>
    </ThankYou>
  ) : (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SectionTitle color={theme.darkBlue}>{header[language]}</SectionTitle>
      <Controller
        as={<Select>{mapContactEmails}</Select>}
        name="to"
        control={control}
        variant="filled"
        defaultValue={'dev@facultaspartners.com'}
        className="input-field"
      />
      <Controller
        as={TextField}
        name="name"
        control={control}
        variant="filled"
        label={inputFields.name[language]}
        defaultValue=""
        className="input-field"
      />
      <Controller
        as={TextField}
        name="email"
        control={control}
        variant="filled"
        label={inputFields.from[language]}
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
      <ButtonContainer>
        <button type="submit" disabled={loading}>
          {inputFields.send[language]}
        </button>
        {loading && <Loader color={theme.darkBlue} size="30" />}
      </ButtonContainer>
    </Form>
  )
}

export default ContactForm
