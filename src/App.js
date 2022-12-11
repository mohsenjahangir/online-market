import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Dashboard } from './componenets/dashboard/dashboard/Dashboard';
import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsList } from './componenets/dashboard/products/ProductsList';
import { Default } from './componenets/dashboard/default/Default';
import { Cart } from './componenets/dashboard/cart/Cart';
import { AboutUS } from './componenets/dashboard/about-us/AboutUS';
import { Login } from './componenets/dashboard/login/Login';


function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Dashboard />

        <Routes>
          <Route path='/' element={<ProductsList />} />
          <Route path='/*' element={<Default />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' />
          <Route path='/about-us' element={<AboutUS />} />
        </Routes >
      </BrowserRouter>

    </StrictMode>
  );

}

export default App;
