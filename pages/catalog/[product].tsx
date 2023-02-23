import { collection, getDoc, getDocs } from 'firebase/firestore'
import { GetStaticPaths, GetStaticProps } from 'next'
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import { db } from '../../services/firebaseConfig'

const Product = ({ product }: any) => {
  return <SingleProduct product={product} />
}

export const getServerSideProps: GetStaticProps = async (context) => {
  const { params = {} } = context

  const data = await getDocs(collection(db, 'Offers')).then((querySnapshot) => {
    return querySnapshot.docs.map((doc) => doc.data())
  })

  const currentOffer = data.filter((offer) => offer.url === params.product)[0]

  return {
    props: {
      product: currentOffer,
    },
  }
}

export default Product
