import React from 'react'
import {
  Input,
  ThemeUIStyleObject,
  Grid,
  Button,
  Text,
  Container,
} from 'theme-ui'
import { ErrorMessage, Form, Formik, useField } from 'formik'
import { FormGroup } from '../FormGroup/FormGroup'
import { BorderWrapper } from '../BorderWrapper/BorderWrapper'
import { useAuth } from '../context/AuthContext'
import * as Yup from 'yup'
import { passwordValidation } from '../validation'
import Link from 'next/link'
import { db } from '../../../services/firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import { useRouter } from 'next/router'
import styles from './SignUp.module.scss'
import { json } from 'stream/consumers'

interface SignupFormValues {
  email: string
  password: string
  repeatPassword: string
}

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
    .typeError('Test'),
  password: passwordValidation,
  repeatPassword: Yup.string().when('password', {
    is: (val: string) => val && val.length > 0,
    then: Yup.string()
      .oneOf([Yup.ref('password')], 'Both passwords need to be the same')
      .required('Required'),
  }),
})

export interface SignupProps {
  sx?: ThemeUIStyleObject
}

const SignUp = ({ sx }: SignupProps): JSX.Element => {
  const router = useRouter()
  const { signUp, setLoading, loading, user } = useAuth()

  const handleSubmit = async (values: SignupFormValues) => {
    try {
      setLoading(true)
      await signUp(values.email, values.password)

      await addDoc(collection(db, 'users'), {
        user: { email: values.email, password: values.password, id: user?.uid },
      })
      router.push('/catalog')
    } catch (error) {
      throw new Error(`${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container sx={{ ...sx }}>
      <BorderWrapper title="Create account">
        <Formik
          initialValues={{
            email: '',
            password: '',
            repeatPassword: '',
          }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={SignUpSchema}
        >
          {({ getFieldProps, errors, touched }) => (
            <Form className={styles['signup-form']}>
              <FormGroup label="Email address" name="email">
                <Input
                  sx={{ borderColor: 'rgb(209, 218, 230)' }}
                  {...getFieldProps('email')}
                  id="email"
                />
              </FormGroup>
              <FormGroup label="Password" name="password">
                <Input
                  sx={{
                    borderColor: 'rgb(209, 218, 230)',
                  }}
                  {...getFieldProps('password')}
                  type="password"
                  id="password"
                />
              </FormGroup>
              <FormGroup label="Repeat password" name="repeatPassword">
                <Input
                  sx={{
                    borderColor: 'rgb(209, 218, 230)',
                  }}
                  {...getFieldProps('repeatPassword')}
                  type="password"
                  id="repeatPassword"
                />
              </FormGroup>
              <Grid>
                <Button
                  type="submit"
                  sx={{ mt: 1, bg: '#3F88F5' }}
                  disabled={
                    loading ||
                    (touched.email !== false &&
                      touched.password !== false &&
                      touched.repeatPassword &&
                      errors.email === undefined &&
                      errors.password === undefined &&
                      errors.repeatPassword === undefined)
                  }
                >
                  Sign up
                </Button>
                {JSON.stringify(errors, touched)}
                <Link href="/login">
                  <Text
                    sx={{
                      display: 'inline-block',
                      textDecoration: 'none',
                      color: '#3F88F5',
                      textAlign: 'center',
                    }}
                  >
                    Do you already have an account? Please login in here.
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

export default SignUp
