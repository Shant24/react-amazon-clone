import { memo } from 'react';
import styles from './checkout.module.scss';
import Subtotal from '../../Subtotal/Subtotal';
import CheckoutProduct from '../../CheckoutProduct/CheckoutProduct';
import { connect } from 'react-redux';

const Checkout = ({ basket, user }) => {
  return (
    <main className={styles.checkout}>
      <div className={styles.checkoutLeft}>
        <img
          className={styles.ad}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />

        <div>
          <h3>{user.email}</h3>
          <h2 className={styles.checkoutTitle}>Your shopping Basket</h2>

          {basket.map((item, i) => (
            <CheckoutProduct key={i} {...item} index={i} />
          ))}
        </div>
      </div>

      <div className={styles.checkoutRight}>
        <Subtotal />
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  basket: state.product.basket,
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(memo(Checkout));
