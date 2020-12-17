import { memo } from 'react';
import { connect } from 'react-redux';
import styles from './product.module.scss';
import StarIcon from '@material-ui/icons/Star';
import { addToBasket } from '../../store/actions/basketActions';

const Product = (props) => {
  const { title, image, price, rating, id, addToBasket } = props;

  return (
    <div className={styles.product}>
      <div className={styles.info}>
        <p>{title}</p>
        <p className={styles.price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <StarIcon />
              </p>
            ))}
        </div>
      </div>

      <img src={image} alt="product_image" />

      <button onClick={() => addToBasket({ title, image, price, rating, id })}>
        Add to Basket
      </button>
    </div>
  );
};

export default connect(null, { addToBasket })(memo(Product));
