import { memo } from 'react';
import { connect } from 'react-redux';
import styles from './subtotal.module.scss';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../store/selectors/basketSelector';

const Subtotal = ({ basket }) => {
  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className={styles.gift}>
              <input id="gift" type="checkbox" />
              <label htmlFor="gift">This order contains a gift</label>
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basket: state.basket.basket,
});

export default connect(mapStateToProps, null)(memo(Subtotal));
