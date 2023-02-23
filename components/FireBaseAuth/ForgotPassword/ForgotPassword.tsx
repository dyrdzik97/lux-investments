import React, { useState } from 'react'
import {
  Input,
  ThemeUIStyleObject,
  Grid,
  Button,
  Container,
  Message,
  Spinner,
} from 'theme-ui'
import { Form, Formik } from 'formik'
import { FormGroup } from '../FormGroup/FormGroup'
import { BorderWrapper } from '../BorderWrapper/BorderWrapper'
import { useAuth } from '../context/AuthContext'
import { emailValidation } from '../validation'
import { useRouter } from 'next/router'

interface ForgotPasswordFormValues {
  email: string
}

export interface ForgotPasswordProps {
  sx?: ThemeUIStyleObject
}

export const ForgotPassword = ({ sx }: ForgotPasswordProps): JSX.Element => {
  const [message, setMessage] = useState('')
  const { resetPassword, setLoading, loading } = useAuth()
  const router = useRouter()

  const handleSubmit = async (values: ForgotPasswordFormValues) => {
    try {
      setLoading(true)
      await resetPassword(values.email)
      setMessage('Check your inbox')
    } catch (error) {
      setMessage('Podany adres email nie istnieje')
    } finally {
      setLoading(false)
    }
  }

  const backToLogin = () => {
    router.push('/login')
  }

  return (
    <Container sx={{ ...sx }}>
      {message && <Message>{message}</Message>}
      <BorderWrapper title="Create account">
        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={emailValidation}
          validateOnBlur={false}
        >
          {({ getFieldProps }) => (
            <Form>
              <FormGroup label="Email" name="email">
                <Input
                  sx={{ borderColor: 'rgb(209, 218, 230)' }}
                  {...getFieldProps('email')}
                  id="email"
                />
              </FormGroup>
              <Grid>
                <Button
                  type="submit"
                  sx={{ mt: 1, bg: '#3F88F5' }}
                  style={{ position: 'relative' }}
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner
                      style={{ position: 'absolute', right: '10px' }}
                      size={15}
                    />
                  ) : (
                    'Reset password'
                  )}
                </Button>
                <Button
                  type="button"
                  onClick={backToLogin}
                  sx={{ mt: 1, bg: '#3F8899' }}
                >
                  Back to login
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </BorderWrapper>
    </Container>
  )
}
