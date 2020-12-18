import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './login.module.scss';
import amazonLogoBlack from '../../../assets/images/amazon-logo-black.png';
import { auth } from '../../../firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((err) => alert(err.message));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <main className={styles.login}>
      <Link to="/">
        <img className={styles.logo} src={amazonLogoBlack} alt="amazon_logo" />
      </Link>

      <div className={styles.loginContainer}>
        <h1>Sign-in</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>

        <p>
          By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
          Pease see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={handleRegister}>Create your Amazon Account</button>
      </div>
    </main>
  );
};

export default Login;
