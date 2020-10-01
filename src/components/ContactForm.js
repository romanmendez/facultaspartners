import React, {useState} from 'react'
import styled from 'styled-components'
import {useForm, Controller} from 'react-hook-form'
import {ErrorMessage} from '@hookform/error-message'
import ErrorStyle from '../layout/ErrorStyle'
import emailjs from 'emailjs-com'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import {useLanguage} from '../context'
import Text from '../layout/Text'
import Loader from '../layout/Loader'
import {theme} from '../styles/theme'

const SectionContainer = styled.div`
  background: ${props => props.theme.lightBlue};
  * + * {
    margin-top: 0.5rem;
  }
`

const Form = styled.form`
  .input-field {
    width: 100%;
  }
  @media (max-width: 550px) {
    padding: 2rem 3rem;
  }
  @media (min-width: 550px) {
    padding: 4rem 5rem;
  }
`
const ThankYou = styled.div`
  padding: 4rem 5rem;
  .text {
    text-align: center;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.darkBlue};
    width: 10rem;
    height: 3rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
    text-transform: uppercase;
    color: white;
    :disabled {
      background: #666;
      cursor: initial;
    }
  }
`

const ContactForm = ({header, form, emails, thankyou}) => {
  const [language] = useLanguage()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const {errors, control, watch, handleSubmit, reset} = useForm()
  const formWatch = watch()

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
  const filterEmails = emails.filter(
    e => e.email.includes('mendez') || e.email.includes('sainz'),
  )
  const mapContactEmails = filterEmails.map(e => (
    <MenuItem key={e.email} value={e.email}>
      {`${e.name} (${e.team.toUpperCase()} Team)`}
    </MenuItem>
  ))

  console.log(formWatch, errors, mapContactEmails)

  return (
    <SectionContainer>
      {sent ? (
        <ThankYou>
          <h2 color={theme.darkBlue}>{thankyou.header[language]}</h2>
          <Text className="text">{thankyou.text[language]}</Text>
          <ButtonContainer style={{display: 'flex', justifyContent: 'center'}}>
            <button onClick={handleBack}>{thankyou.back[language]}</button>
          </ButtonContainer>
        </ThankYou>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2 color={theme.darkBlue}>{header[language]}</h2>
          <Controller
            as={<Select>{mapContactEmails}</Select>}
            name="to"
            control={control}
            variant="filled"
            labelId="to-label"
            value={mapContactEmails}
            defaultValue={
              language === 'us'
                ? mapContactEmails[0].props.value
                : mapContactEmails[1].props.value
            }
            className="input-field"
          />
          <Controller
            as={TextField}
            name="name"
            control={control}
            variant="filled"
            label={form.name[language]}
            defaultValue=""
            className="input-field"
            rules={{required: form.errorMessage.name[language]}}
            error={Boolean(errors.name)}
          />
          <ErrorMessage errors={errors} name="name" as={<ErrorStyle />}>
            {({messages}) => <div key={type}>{message}</div>}
          </ErrorMessage>
          <Controller
            as={TextField}
            name="email"
            control={control}
            variant="filled"
            label={form.from[language]}
            defaultValue=""
            className="input-field"
            rules={{
              required: form.errorMessage.noEmail[language],
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: form.errorMessage.invalidEmail[language],
              },
            }}
            error={Boolean(errors.email)}
          />
          <ErrorMessage errors={errors} name="email" as={<ErrorStyle />}>
            {({messages}) => <div key={type}>{message}</div>}
          </ErrorMessage>
          <Controller
            as={TextField}
            name="message"
            control={control}
            multiline
            rows={5}
            variant="filled"
            label={form.message[language]}
            defaultValue=""
            className="input-field"
          />
          <ButtonContainer>
            <button type="submit" disabled={loading}>
              {form.send[language]}
            </button>
            {loading && <Loader color={theme.darkBlue} size="30" />}
          </ButtonContainer>
        </Form>
      )}
    </SectionContainer>
  )
}

export default ContactForm
