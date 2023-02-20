import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home/Home';
import Categories from './Category/Categories';
import Products from './Products/Products';
import Navigation from './Navbar/Navigation';
import Footer from './Footer/Footer';
import HeaderNews from './HeaderNews/HeaderNews';
function App() {
  return (
    <BrowserRouter>
      <HeaderNews/>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/category/:id' element={<Categories/>}/>
          <Route path='/daily-deals' element={<Products/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
