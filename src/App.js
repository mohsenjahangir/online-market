import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Dashboard } from './componenets/dashboard/Dashboard';
import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Body } from './componenets/body/Body';
import { Default } from './componenets/default/Default';
import { Cart } from './componenets/cart/Cart';
import { AboutUS } from './componenets/about-us/AboutUS';
import { Login } from './componenets/login/Login';
import { Toasts } from '../src/toast/Toasts';
import { Home } from './componenets/home/Home';
import { Weather } from './componenets/weather/Weather';
import { Footer } from '../src/componenets/footer/Footer'
import ScrollButton from './back-to-top/ScrollButton';





function App() {
  return (
    <StrictMode>
      
      <Toasts />
      
      <BrowserRouter>
      
        <Dashboard/>
        
        <Routes>
          <Route path='/Body' element={<Body />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login />} />z
          <Route path='/about-us' element={<AboutUS />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/*' element={<Default />} />
        </Routes >
       
        <Footer/>
      </BrowserRouter>
      <ScrollButton/>
    </StrictMode>
  );

}

export default App;
