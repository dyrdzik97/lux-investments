import { RandomUUIDOptions } from 'crypto'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/router'
import { SyntheticEvent, useState } from 'react'
import { Input, Button, Textarea, Message, Spinner } from 'theme-ui'
import { uuid } from 'uuidv4'
import * as Yup from 'yup'
import { convertStringProductUrl } from '../../hooks/convertStringProductUrl'
import UploadIcon from '../../icons/UploadIcon'
import { IImageProps, IFormProps } from '../../models'
import { db } from '../../services/firebaseConfig'
import { addImageToDatabaseAndReturnPhotoUrl } from '../../utils/addImageToDatabase'
import BackButton from '../BackButton/BackButton'
import { useAuth } from '../FireBaseAuth/context/AuthContext'
import { FormGroup } from '../FireBaseAuth/FormGroup/FormGroup'
import styles from './AddOfferForm.module.scss'

const AddOfferSchema = Yup.object().shape({
  title: Yup.string().trim('Invalid title').required('Required'),
  description: Yup.string().trim('Invalid description').required('Required'),
  price: Yup.number().integer().nullable(true).label('Wpisz poprawną wartość'),
  size: Yup.number().integer().nullable(true).label('Wpisz poprawną wartość'),
  owner: Yup.string().trim('Invalid owner').required('Required'),
  image: Yup.object().required('Required'),
})

interface IMessages {
  imageError: string
  uploadError: string
  errorMessage: string
  successMessage: string
}

type MessageTypes =
  | 'imageError'
  | 'uploadError'
  | 'errorMessage'
  | 'successMessage'

const AddOfferForm = (): JSX.Element => {
  const [image, setImage] = useState<IImageProps>({
    name: '',
    type: '',
  })
  const [messages, setMessages] = useState<IMessages>({
    imageError: '',
    uploadError: '',
    errorMessage: '',
    successMessage: '',
  })
  const { imageError, uploadError, errorMessage, successMessage } = messages
  const [isFormLoading, setIsFormLoading] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  const handleMessage = (key: MessageTypes, value: string) => {
    setMessages((prev) => ({ ...prev, [key]: value }))
  }

  const handleImage = async (evt: any) => {
    const selectedFile = evt.target.files[0]

    if (selectedFile) {
      setImage(selectedFile)
      handleMessage('successMessage', 'Image added')
    } else {
      handleMessage('imageError', 'Select correct photo')
    }

    setTimeout(() => {
      handleMessage('successMessage', '')
      handleMessage('imageError', '')
    }, 2000)
  }

  const onSendOffer = async (values: IFormProps) => {
    const photoUrl = await addImageToDatabaseAndReturnPhotoUrl(image)
    const { title, description, owner, price, size } = values

    try {
      setIsFormLoading(true)

      const data = await getDocs(collection(db, 'Offers')).then(
        (querySnapshot) => {
          return querySnapshot.docs.map((doc) => doc.data())
        },
      )

      if (data.find((item) => item.offerName === title)) {
        handleMessage('errorMessage', 'Offer name already exist')
        return
      }

      addDoc(collection(db, 'Offers'), {
        id: uuid(),
        offerName: title,
        offerDescription: description,
        offerOwner: owner,
        price: price,
        size: size,
        image: photoUrl,
        userId: user?.uid,
        createdAt: new Date().toString(),
        url: convertStringProductUrl(title),
      })
    } catch (err) {
      handleMessage('errorMessage', 'Sth goes wrong :(')
    } finally {
      handleMessage('successMessage', 'Offer added successfully')
      handleMessage('errorMessage', '')
      handleMessage('uploadError', '')
      setTimeout(() => {
        router.push('/catalog')
      }, 2000)
    }
  }

  const onDeleteImage = () => {
    setImage({
      name: '',
      type: '',
    })
  }

  console.warn(image)

  return (
    <div className={styles['add-offer']}>
      <div className={styles.description}>
        <span>Add your offer</span>
        <p>
          here you can add your offer, attach here all necessary informations
          and photos.
        </p>
      </div>
      <div className={styles['form-container']}>
        {isFormLoading && (
          <div className={styles['processing-placeholder']}>
            <Spinner className={styles.spinner} size={25} />
          </div>
        )}
        <Formik
          initialValues={{
            title: '',
            description: '',
            price: null,
            size: null,
            owner: '',
            image: { name: '', type: '' },
          }}
          onSubmit={(values) => {
            return onSendOffer(values)
          }}
          validationSchema={AddOfferSchema}
        >
          {({ getFieldProps }) => {
            return (
              <Form>
                <div className={styles['first-row']}>
                  <FormGroup label="Offer title" name="title">
                    <Input
                      sx={{ borderColor: 'rgb(209, 218, 230)' }}
                      {...getFieldProps('title')}
                      id="title"
                      required
                      placeholder="title"
                    />
                  </FormGroup>
                  <FormGroup label="Owner" name="owner">
                    <Input
                      sx={{
                        borderColor: 'rgb(209, 218, 230)',
                      }}
                      {...getFieldProps('owner')}
                      id="owner"
                      required
                      placeholder="owner"
                    />
                  </FormGroup>
                </div>
                <div className={styles['second-row']}>
                  <FormGroup label="Offer description" name="description">
                    <Textarea
                      sx={{
                        borderColor: 'rgb(209, 218, 230)',
                      }}
                      {...getFieldProps('description')}
                      id="description"
                      required
                      placeholder="description"
                    />
                  </FormGroup>
                </div>
                <div className={styles['third-row']}>
                  <FormGroup label="Price" name="price">
                    <Input
                      sx={{
                        borderColor: 'rgb(209, 218, 230)',
                      }}
                      {...getFieldProps('price')}
                      type="number"
                      id="price"
                      required
                      placeholder="100000"
                    />
                  </FormGroup>
                  <FormGroup label="Size in m2" name="size">
                    <Input
                      sx={{
                        borderColor: 'rgb(209, 218, 230)',
                      }}
                      {...getFieldProps('size')}
                      type="number"
                      id="size"
                      required
                      placeholder="100"
                    />
                  </FormGroup>
                </div>
                <div className={styles['image__uploader']}>
                  <FormGroup label="Upload image" name="image">
                    <Input
                      sx={{
                        borderColor: 'rgb(209, 218, 230)',
                      }}
                      {...getFieldProps('image')}
                      type="file"
                      // multiple
                      value={undefined}
                      id="image"
                      required
                      onChange={handleImage}
                    />
                    <div className={styles['image__uploader--field']}>
                      {!image.name ? (
                        <UploadIcon fillColor="#000" />
                      ) : (
                        <p>
                          {image.name}
                          <span onClick={onDeleteImage}>X</span>
                        </p>
                      )}
                    </div>
                  </FormGroup>
                </div>
                <button
                  type="submit"
                  className={styles['form-container__submit-button']}
                  disabled={isFormLoading}
                >
                  add offer
                </button>
              </Form>
            )
          }}
        </Formik>
        <div className={styles['form-container__messages']}>
          {successMessage !== '' && <Message>{successMessage}</Message>}
          {uploadError !== '' && <Message>{uploadError}</Message>}
          {imageError !== '' && <Message>{imageError}</Message>}
          {errorMessage !== '' && <Message>{errorMessage}</Message>}
        </div>
      </div>
      <BackButton />
    </div>
  )
}

export default AddOfferForm
