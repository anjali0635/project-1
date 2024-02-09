//import logo from './logo.svg';
import Footer from './Component/Footer/Footer.jsx';
import Navbar from './Component/Navbar/Navbar.jsx';
import Shop from './pages/Shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Mens_banner from './Component/assets/banner_mens.png';
import Womens_banner from './Component/assets/banner_women.png';
import Kids_banner from './Component/assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={Mens_banner} category='mens' />}/>
        <Route path='/womens' element={<ShopCategory banner={Womens_banner} category='womens'/>}/>
        <Route path='/kids' element={<ShopCategory banner={ Kids_banner} category='kids'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
