import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import styles from './SingleProduct.module.scss'
import { useAuth } from '../FireBaseAuth/context/AuthContext'
import { Button, Message } from 'theme-ui'
import BackButton from '../BackButton/BackButton'
import { useRouter } from 'next/router'
import { useState } from 'react'

const SingleProduct = ({ product }: any) => {
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()
  const { user } = useAuth()
  const { offerName, offerOwner, offerDescription, price } = product

  const onDeleteProduct = async () => {
    const offers = await getDocs(collection(db, 'Offers', '/'))
    const currentOffer = offers.docs.find(
      (item) => item.data().id === product.id,
    )
    const docRef = doc(db, 'Offers', `${currentOffer?.id}`)

    await deleteDoc(docRef)
      .then(() => {
        setSuccessMessage('Offer deleted')
      })
      .catch((error) => {
        setErrorMessage(error)
      })
      .finally(() => {
        setTimeout(() => router.push('/catalog'), 1000)
        setSuccessMessage('')
        setErrorMessage('')
      })
  }
  return (
    <div className={styles['single-product__container']}>
      <div className={styles['single-product__details']}>
        <div className={styles['single-product__details--content']}>
          <div className={styles['single-product__details-name']}>
            <h2>{offerName}</h2>
            <p>{offerOwner}</p>
          </div>
          <div className={styles['single-product__details-price']}>
            <p>{price} $</p>
          </div>
          <div className={styles['single-product__details-description']}>
            <p>{offerDescription}</p>
          </div>
          {user && (
            // TODO prevent visibility of this button only when userId === userId on this offer
            <Button className={styles.delete__button} onClick={onDeleteProduct}>
              Delete product
            </Button>
          )}
        </div>
      </div>
      <div className={styles['single-product__images']}>
        <img
          alt={offerName}
          src={
            'https://i.pinimg.com/originals/95/29/91/952991594aa478fa2232553e4eb8757d.jpg'
          }
        />
        <img
          alt={offerName}
          src={
            'https://i.pinimg.com/originals/95/29/91/952991594aa478fa2232553e4eb8757d.jpg'
          }
        />
        <img
          alt={offerName}
          src={
            'https://i.pinimg.com/originals/95/29/91/952991594aa478fa2232553e4eb8757d.jpg'
          }
        />
      </div>
      <BackButton />
      {successMessage !== '' && <Message>{successMessage}</Message>}
      {errorMessage !== '' && <Message>{errorMessage}</Message>}
    </div>
  )
}

export default SingleProduct
