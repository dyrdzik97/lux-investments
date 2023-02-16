import React, { useState } from 'react'
import {
  Input,
  ThemeUIStyleObject,
  Grid,
  Button,
  Text,
  Container,
  Alert,
  Message,
} from 'theme-ui'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { FormGroup } from '../FormGroup/FormGroup'
import { BorderWrapper } from '../BorderWrapper/BorderWrapper'
import { useAuth } from '../context/AuthContext'
import { passwordValidation } from '../validation'
import Link from 'next/link'
import styles from './Login.module.scss'
import { useRouter } from 'next/router'

interface LoginFormValues {
  email: string
  password: string
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: passwordValidation,
})

export interface LoginProps {
  sx?: ThemeUIStyleObject
}

export const Login = ({ sx }: LoginProps): JSX.Element => {
  const [formError, setFormError] = useState<string>('')
  const { signIn, signInWithGoogle } = useAuth()
  const router = useRouter()

  return (
    <Container sx={{ ...sx }}>
      {formError !== '' && <Message>{formError}</Message>}
      <BorderWrapper title="Log In">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={async (values: LoginFormValues) => {
            try {
              await signIn(values.email, values.password)
              router.push('/')
            } catch (error) {
              setFormError(`${error}`)
            }
          }}
          validationSchema={LoginSchema}
        >
          {({ getFieldProps, errors }) => (
            <Form className={styles.login}>
              <FormGroup label="Email address" name="email">
                <Input
                  sx={{ borderColor: 'rgb(209, 218, 230)' }}
                  {...getFieldProps('email')}
                  id="email"
                />
                {/* {errors[id] && ...} */}
              </FormGroup>
              <FormGroup label="Password" name="password">
                <Input
                  sx={{
                    borderColor: !formError ? 'rgb(209, 218, 230)' : 'red',
                  }}
                  {...getFieldProps('password')}
                  type="password"
                  id="password"
                />
              </FormGroup>
              <Grid>
                <Button type="submit" sx={{ mt: 1, bg: '#000' }}>
                  Log in
                </Button>
                <Button
                  type="button"
                  sx={{ mt: 1, bg: '#3F88F5' }}
                  onClick={() => signInWithGoogle()}
                >
                  Log in with google
                </Button>
                <Link href="/forgotPassword">
                  <Text
                    sx={{
                      display: 'inline-block',
                      textDecoration: 'none',
                      color: '#000',
                      fontSize: '12px',
                    }}
                  >
                    Forgot password? Remind me!
                  </Text>
                </Link>
                <Link href="/signup">
                  <Text
                    sx={{
                      display: 'inline-block',
                      textDecoration: 'none',
                      color: '#000',
                      fontSize: '12px',
                    }}
                  >
                    Need an account? Please, Sign Up
                  </Text>
                </Link>
              </Grid>
            </Form>
          )}
        </Formik>
      </BorderWrapper>
    </Container>
  )
}
