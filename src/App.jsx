import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import ForgotPassword from './pages/ForgotPassword'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Blog from './pages/Blog'
import AddBlog from './pages/admin/update/AddBlog'
import EditBlog from './pages/admin/update/EditBlog'
import BlogDetails from './pages/BlogDetails'
import Dashboard from './pages/admin/Dashboard'
import Checkout from './pages/Checkout'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/products' element={<Product />}></Route>
          <Route path='/products/:slug' element={<ProductDetails />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/blog/:det' element={<BlogDetails />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/dashboard/add' element={<AddBlog />}></Route>
          <Route path='/dashboard/edit/:edit' element={<EditBlog />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/createaccount' element={<CreateAccount />}></Route>
          <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App