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
import { Weather } from './componenets/dashboard/weather/Weather';
import { Footer } from '../src/componenets/dashboard/footer/Footer'
import ScrollButton from './back-to-top/ScrollButton';





function App() {
  return (
    <StrictMode>
      
      <Toasts />
      
      <BrowserRouter>
      
        <Dashboard/>
        
        <Routes>
          <Route path='/Body' element={<Body />} />
          <Route path='/*' element={<Default />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<AboutUS />} />
          <Route path='/weather' element={<Weather />} />
        </Routes >
       
        <Footer/>
      </BrowserRouter>
      <ScrollButton/>
    </StrictMode>
  );

}

export default App;
