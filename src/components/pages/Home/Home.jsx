import styles from './home.module.scss';
import primeVideoBanner from '../../../assets/images/prime-video-banner.jpg';
import Product from '../../Product/Product';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <img className={styles.homeImg} src={primeVideoBanner} alt="" />

        <div className={styles.row}>
          <Product
            id="1234"
            title={
              'Kasa Smart Plug by TP-Link, Smart Home WiFi Outlet works with Alexa, Echo,Google Home & IFTTT,No Hub Required, Remote Control, 15 Amp, UL certified, 1-Pack (HS105)'
            }
            price={29.99}
            rating={4}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/81B%2B4phWROL._AC_SY355_.jpg'
            }
          />

          <Product
            id="2345"
            title={'PlayStation 4 Pro 1TB Console'}
            price={450.0}
            rating={5}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/41tNfEM%2BBmL._AC_SY355_.jpg'
            }
          />
        </div>

        <div className={styles.row}>
          <Product
            id="3456"
            title={
              'Moto G7 Plus | Unlocked | Made for US by Motorola | 4/64GB | 16MP Camera | 2019 | Black'
            }
            price={122.99}
            rating={4}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/81N4XZjeBvL._AC_SX425_.jpg'
            }
          />
          <Product
            id="4567"
            title={'Logitech G502 Hero High Performance Gaming Mouse'}
            price={49.97}
            rating={5}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/719H1lQyQZL._AC_SY450_.jpg'
            }
          />

          <Product
            id="5678"
            title={
              'Synology 2 bay NAS DiskStation DS220j (Diskless), 2-bay; 512MB DDR4'
            }
            price={168.99}
            rating={5}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/71FUj2j7ReL._AC_SX466_.jpg'
            }
          />
        </div>

        <div className={styles.row}>
          <Product
            id="6789"
            title={
              'Turtle Beach Ear Force Recon 50X Stereo Gaming Headset for Xbox One & Xbox Series X|S (compatible w/ Xbox controller w/ 3.5mm Headset Jack) PlayStation 5 & PS4'
            }
            price={24.95}
            rating={4}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/71GJa4FPgRL._SY445_.jpg'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
