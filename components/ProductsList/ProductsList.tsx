import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect } from 'react'
import Product from '../Product/Product'
import styles from './ProductsList.module.scss'

const ProductsList = ({ offers }: any) => {
  return (
    <div className={styles['products-list']}>
      {offers && offers.length !== 0 ? (
        offers.map((offer: any, index: number) => {
          return <Product item={offer} key={index} />
        })
      ) : (
        <div>List of products is empty, try again later 🤓</div>
      )}
    </div>
  )
}

export default ProductsList
