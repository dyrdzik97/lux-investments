import { IOfferModel } from "../../models";
import Product from "../Product/Product";
import styles from "./ProductsList.module.scss";

interface IProductsList {
  offers: IOfferModel[];
}

const ProductsList = ({ offers }: IProductsList) => {
  return (
    <div className={styles["products-list"]}>
      {offers && offers.length !== 0 ? (
        offers.map((offer: IOfferModel, index: number) => {
          return <Product item={offer} key={index} />;
        })
      ) : (
        <div>List of products is empty, try again later 🤓</div>
      )}
    </div>
  );
};

export default ProductsList;
