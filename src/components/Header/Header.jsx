import { memo, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import amazonLogo from '../../assets/images/amazon-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { auth } from '../../firebase';

const Header = (props) => {
  const { basketCount, user } = props;

  const [input, setInput] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  const handleAuthentication = () => user && auth.signOut();

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
        <Link to={!user ? '/login' : ''}>
          <div className={styles.option} onClick={handleAuthentication}>
            <span className={styles.lineOne}>
              Hello {user ? user.displayName || 'User' : 'Guest'}
            </span>
            <span className={styles.lineTwo}>
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

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
  basketCount: state.product.basket?.length,
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(memo(Header));
