// import React from 'react'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Home from './Pages/User/Home'
import Navbar from './Components/Navbar'
import Search from './Pages/User/Search'
import Cart from './Pages/User/Cart'
import Orders from './Pages/User/Orders'
import Product from './Pages/User/Product'
import Wishlist from './Pages/User/Wishlist'
import Login from './Pages/User/Login'
import Profile from './Pages/User/Profile'
import Contact from './Pages/User/Contact'
import Dashboard from './Pages/Admin/Dahboard'
import Customer from './Pages/Admin/Customers'
import Productmanage from './Pages/Admin/Product'
import Transaction from './Pages/Admin/Orders'
import Bar from './Pages/Admin/Charts/Bar'
import Pie from './Pages/Admin/Charts/Pie'

const App = () => {
  return (
    <div >
      <Router>

      <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/cart' element ={<Cart/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/wishlist' element ={<Wishlist/>}/>
          <Route path='/profile' element ={<Profile/>}/>
          <Route path='/contact' element={<Contact/>}/>



          
          <Route path='/admin/dashboard' element={<Dashboard/>}/>
          <Route path='/admin/customers' element={<Customer/>}/>
          <Route path='/admin/products' element={<Productmanage/>}/>
          <Route path='/admin/orders' element={<Transaction/>}/>
          <Route path='/admin/bar' element={<Bar/>}/>
          <Route path='/admin/pie' element={<Pie/>}/>



        </Routes>
      </Router>

    </div>
  )
}

export default App