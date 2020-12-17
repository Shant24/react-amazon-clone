import { memo } from 'react';
import { connect } from 'react-redux';
import styles from './checkoutProduct.module.scss';
import StarIcon from '@material-ui/icons/Star';
import { removeFromBasket } from '../../store/actions/basketActions';

const CheckoutProduct = ({
  id,
  index,
  title,
  image,
  price,
  rating = 5,
  removeFromBasket,
}) => {
  return (
    <div className={styles.checkoutProduct}>
      <img src={image} alt="product_image" />

      <div className={styles.info}>
        <p className={styles.title}>{title}</p>

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

        <button onClick={() => removeFromBasket(index)}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default connect(null, { removeFromBasket })(memo(CheckoutProduct));
