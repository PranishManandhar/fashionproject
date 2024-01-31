import './App.css';
import Cart from './components/Cart';
import Card from './components/Card';
import Nav from './components/Nav';
import Contacts from './components/Contacts';
import Products from './components/Products';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Authentication from './components/Authentication';
import ProductPage from './components/ProductPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartState from './context/cart/CartState';
import Account from './components/Account';


export default function App() {
  return (
    <>
    <CartState>
      <Router>
        <Nav />
        <Routes>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/id=" element={<ProductPage/>} />
          <Route path="/authenticate" element={<Authentication />} />
          <Route path="/MyAccount" element={<Account />} />
          <Route
            path="/"
            element={(
              <>
                <Carousel />
                <Card/>
              </>
            )}
          />
        </Routes>
        <Footer />
      </Router>
      </CartState>
    </>
  );
}
