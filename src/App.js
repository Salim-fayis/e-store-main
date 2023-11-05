import './App.css';
import React, {useState} from 'react'
import { BrowserRouter as Router, Routes , Route  } from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductData from './pages/Product/ProductData';


function App() {
  const [cart, setCart] = useState([])
  //product Detail
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState(ProductData)
  const searchbtn = (product) => 
  {
    const change = ProductData.filter((x) => 
    {
      return product.toLowerCase() === ''
      ? x
      : x.Title.toLowerCase().includes(product.toLowerCase());
    })
    setProduct(change)
  }
  //product detail
  const view = (product) => 
  {
    setDetail([{...product}])
    setClose(true)
  }

  // add to cart
  const addtocart = (product) => 
  {
    const exsit = cart.find((x) => 
    {
      return x.id === product.id
    })
    if(exsit)
    {
      alert("This Product is already added to cart")
    }
    else
    { 
      setCart([...cart, {...product, qty:1}])
      alert("product is added to cart")
    }
  } 
  console.log(cart)

  return (
   <>
    <Router>
      <Header searchbtn={searchbtn} productCounter={cart.length}/>
   <Routes>
   <Route path='/e-store-main' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
   <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
        <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer/>
    </Router>
   </>
  );
}

export default App;
