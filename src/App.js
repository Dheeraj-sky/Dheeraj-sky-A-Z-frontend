
import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnaav/Newnav';
import Maicomp from './components/home/Maicomp';
import Footer from './components/footer/Footer';
import Sign_in from './components/signup_sign/Sign_in';
import SignUp from './components/signup_sign/SignUp';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
   <Navbaar/>
   <Newnav/>
   <Routes>
    <Route path='/' element={<Maicomp/>}/>
    <Route path='/login' element={<Sign_in/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/getproductsone/:id' element={<Cart/>}/>
    <Route path='/buynow' element={<Buynow/>}/>
   </Routes>
   
    <Footer/>
    </>
  );
}

export default App;
