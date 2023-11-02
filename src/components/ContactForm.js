import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import ErrorStyle from '../layout/ErrorStyle';
import emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useLanguage } from '../context';
import Text from '../layout/Text';
import Loader from '../layout/Loader';
import { theme } from '../styles/theme';
import Stack from '../layout/Stack';
import Box from '../layout/Box';
import logo from '../../assets/logoblue.png';

const Form = styled.form`
  width: 100%;
  .input-field {
    width: 100%;
  }
`;
const Submitted = styled.div`
  padding: 4rem 5rem;
  .text {
    text-align: center;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: ${props => props.theme.scale(1)};
  img {
    width: 70%;
    height: 70%;
    max-width: 30rem;
  }
`;

const ContactForm = ({ header, form, contacts, thankyou }) => {
  const [language] = useLanguage();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { errors, control, handleSubmit } = useForm();

  const onSubmit = value => {
    setLoading(true);
    emailjs
      .send('gmail', 'facultas_partners', value, 'user_Ly7agQm0zXwaNrHx8D7SB')
      .then(result => {
        setLoading(false);
        setSent(true);
      })
      .catch(error => {
        setLoading(false);
        setError(true);
      });
  };

  const mapContactEmails = contacts.map(contact => (
    <MenuItem key={contact.email} value={contact.email}>
      {`${contact.name} (${contact.team.toUpperCase()} Team)`}
    </MenuItem>
  ));

  return (
    <Box space={1} padding={2}>
      <Stack space={1}>
        {sent ? (
          <Submitted>
            <Stack space={1} justify='center'>
              <h2 style={{ color: `${theme.darkBlue}`, textAlign: 'center' }}>
                {thankyou.header[language]}
              </h2>
              <Text className='text'>{thankyou.text[language]}</Text>
              <Box
                background={props => props.theme.darkBlue}
                color='white'
                width={6}
                radius={-1}
                button={true}
                onClick={handleBack}
              >
                {thankyou.back[language]}
              </Box>
            </Stack>
          </Submitted>
        ) : error ? (
          <Submitted>
            <Stack space={1} justify='center'>
              <h2 style={{ color: `${theme.darkBlue}`, textAlign: 'center' }}>
                {error}
              </h2>
              <Text className='text'>{thankyou.text[language]}</Text>
              <Box
                background={props => props.theme.darkBlue}
                color='white'
                width={6}
                radius={-1}
                button={true}
                onClick={handleBack}
              >
                {thankyou.back[language]}
              </Box>
            </Stack>
          </Submitted>
        ) : (
          <Stack justify='center'>
            <Form>
              <Stack space={1} justify='center'>
                <h2 style={{ color: `${theme.darkBlue}`, textAlign: 'center' }}>
                  {header[language]}
                </h2>
                <Controller
                  as={<Select>{mapContactEmails}</Select>}
                  name='to'
                  control={control}
                  variant='filled'
                  labelId='to-label'
                  value={mapContactEmails}
                  defaultValue={
                    language === 'us'
                      ? mapContactEmails[0].props.value
                      : mapContactEmails[1].props.value
                  }
                  className='input-field'
                />
                <Controller
                  as={TextField}
                  name='name'
                  control={control}
                  variant='filled'
                  label={form.name[language]}
                  defaultValue=''
                  className='input-field'
                  rules={{ required: form.errorMessage.name[language] }}
                  error={Boolean(errors.name)}
                />
                <ErrorMessage errors={errors} name='name' as={<ErrorStyle />}>
                  {({ messages }) => <div key={messages}>{messages}</div>}
                </ErrorMessage>
                <Controller
                  as={TextField}
                  name='email'
                  control={control}
                  variant='filled'
                  label={form.from[language]}
                  defaultValue=''
                  className='input-field'
                  rules={{
                    required: form.errorMessage.noEmail[language],
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: form.errorMessage.invalidEmail[language],
                    },
                  }}
                  error={Boolean(errors.email)}
                />
                <ErrorMessage errors={errors} name='email' as={<ErrorStyle />}>
                  {({ messages }) => <div key={messages}>{messages}</div>}
                </ErrorMessage>
                <Controller
                  as={TextField}
                  name='message'
                  control={control}
                  multiline
                  rows={5}
                  variant='filled'
                  label={form.message[language]}
                  defaultValue=''
                  className='input-field'
                />
                <Box
                  background={props => props.theme.darkBlue}
                  color='white'
                  width={6}
                  radius={-1}
                  button={true}
                  onClick={handleSubmit(onSubmit)}
                >
                  {form.send[language]}
                </Box>
                {loading && <Loader color={theme.darkBlue} size='30' />}
              </Stack>
            </Form>
          </Stack>
        )}
        <Logo src={logo}>
          <img alt='Facultas Partners logo' src={logo} />
        </Logo>
      </Stack>
    </Box>
  );
};

export default ContactForm;
