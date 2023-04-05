import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Products from './component/Products';
import React from 'react'
import Product from './component/Product';
import ViewCart from './component/ViewCart';
import About from './component/About';
import Contact from './component/Contact';
import Checkout from './component/Checkout';

const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/products" element={<Products/>}/>
    <Route exact path="/products/:id" element={<Product/>}/>
    <Route exact path="/cart" element={<ViewCart/>}/>
    <Route exact path='/checkout' element={<Checkout/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App;
// function App() {
//   return (
//     <>
//     <Navbar/>
//     <Router>
//       <Routes>
//     <Route exact path="/" Component={<Home/>}></Route>
//     <Route exact path="/products" Component={<Products/>}></Route>
//     </Routes>
//     </Router>
//     </>
//   );
// }

// export default App;
