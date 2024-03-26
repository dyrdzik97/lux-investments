import { collection, getDocs } from "firebase/firestore";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { IOfferModel } from "../models";
import { db } from "../services/firebaseConfig";

const ProductsList = dynamic(
  () => import("../components/ProductsList/ProductsList"),
  {
    ssr: false,
  }
);

interface ICatalog {
  offers: IOfferModel[];
}

const Catalog = ({ offers }: ICatalog) => {
  return (
    <Suspense fallback={<div>Loading catalog...</div>}>
      <ProductsList offers={offers} />
    </Suspense>
  );
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
