import { Switch, Route } from 'react-router';
import './app.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import Checkout from './components/pages/Checkout/Checkout';

function App() {
  return (
    <>
      <Header />

      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout" exact component={Checkout} />
        </Switch>
      </main>

      <Footer />
    </>
  );
}

export default App;
