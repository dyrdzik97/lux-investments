import { getDocs } from 'firebase/firestore'
import { GetStaticProps } from 'next'
import { db } from '../services/firebaseConfig'
import { collection } from 'firebase/firestore'
import ProductsList from '../components/ProductsList/ProductsList'

const Catalog = ({ offers }: any) => {
  return <ProductsList offers={offers} />
}

export const getServerSideProps: GetStaticProps = async () => {
  const data = await getDocs(collection(db, 'Offers')).then((querySnapshot) => {
    return querySnapshot.docs.map((doc) => doc.data())
  })

  return {
    props: {
      offers: data,
    },
  }
}

export default Catalog
