import Link from "next/link";
import styles from "./Product.module.scss";

interface IProductProps {
  item: any;
}

const Product = ({ item }: IProductProps): JSX.Element => {
  return (
    <Link href={`/catalog/${item.url}`} passHref>
      <div className={styles.content}>
        <div className={styles.grid}>
          <figure className={styles["effect-apollo"]}>
            <img
              src={item.image}
              alt={item.offerName}
              width={550}
              height={550}
            />
            <figcaption>
              <h2>{item.offerName}</h2>
              <p>{item.price} zł</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </Link>
  );
};

export default Product;
