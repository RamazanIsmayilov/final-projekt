import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Blog from './pages/Blog'
import ArticleBlog from './pages/ArticleBlog'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Wishlist from './pages/Wishlist'
import Compare from './pages/Compare'
import Cart from './pages/Cart'


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/products' element={<Product />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/articleblog' element={<ArticleBlog />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/createaccount' element={<CreateAccount />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
        <Route path='/compare' element={<Compare />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App