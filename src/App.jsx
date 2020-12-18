import { useEffect } from 'react';
import { Switch, Route } from 'react-router';
import './app.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import Checkout from './components/pages/Checkout/Checkout';
import Login from './components/pages/Login/Login.';
import { auth } from './firebase';
import { connect } from 'react-redux';
import { setUser } from './store/actions/authActions';

const App = (props) => {
  const { setUser } = props;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => setUser(authUser));
  }, [setUser]);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
        <Route path="/checkout" exact>
          <Header />
          <Checkout />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>

      <Footer />
    </>
  );
};

export default connect(null, { setUser })(App);
