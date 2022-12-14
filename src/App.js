import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Dashboard } from './componenets/dashboard/dashboard/Dashboard';
import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Body } from './componenets/dashboard/body/Body';
import { Default } from './componenets/dashboard/default/Default';
import { Cart } from './componenets/dashboard/cart/Cart';
import { AboutUS } from './componenets/dashboard/about-us/AboutUS';
import { Login } from './componenets/dashboard/login/Login';
import { Toasts } from '../src/toast/Toasts';
import { Home } from './componenets/dashboard/home/Home';


function App() {
  return (
    <StrictMode>
      <Toasts />
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path='/Body' element={<Body />} />
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
