import { collection, getDocs } from "firebase/firestore";
import { GetStaticProps } from "next";
import ProductsList from "../components/ProductsList/ProductsList";
import { IOfferModel } from "../models";
import { db } from "../services/firebaseConfig";

interface ICatalog {
  offers: IOfferModel[];
}

const Catalog = ({ offers }: ICatalog) => {
  return <ProductsList offers={offers} />;
};

export const getServerSideProps: GetStaticProps = async () => {
  const data = await getDocs(collection(db, "Offers")).then((querySnapshot) => {
    return querySnapshot.docs.map((doc) => doc.data());
  });

  return {
    props: {
      offers: data,
    },
  };
};

export default Catalog;
