import { memo, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import amazonLogo from '../../assets/images/amazon-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = (props) => {
  const { basketCount } = props;

  const [input, setInput] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={amazonLogo} alt="amazon_logo" />
      </Link>

      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          value={input}
          onChange={handleInputChange}
        />
        <button>
          <SearchIcon className={styles.searchIcon} />
        </button>
      </form>

      <nav className={styles.nav}>
        <div className={styles.option}>
          <span className={styles.lineOne}>Hello Guest</span>
          <span className={styles.lineTwo}>Sign In</span>
        </div>

        <div className={styles.option}>
          <span className={styles.lineOne}>Returns</span>
          <span className={styles.lineTwo}>& Orders</span>
        </div>

        <div className={styles.option}>
          <span className={styles.lineOne}>Your</span>
          <span className={styles.lineTwo}>Prime</span>
        </div>

        <Link to="/checkout">
          <div className={styles.optionBasket}>
            <ShoppingBasketIcon />
            <span className={`${styles.lineTwo} ${styles.basketCount}`}>
              {basketCount}
            </span>
          </div>
        </Link>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  basketCount: state.basket.basket?.length,
});

export default connect(mapStateToProps, null)(memo(Header));
