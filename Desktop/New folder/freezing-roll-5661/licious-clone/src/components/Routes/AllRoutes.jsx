import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../LandingPage/HomePage'
import Products from '../ProductPage/Products';
import ProductDetails from "../ProductPage/ProductDetails";
import Address from '../Bag/AddressPage';
const AllRoutes = () => {
  return (
    <div>
    <Routes>
      <Route  path='/' element={<HomePage />} />
      <Route path="chicken" element={<Products />} />
      <Route path="chicken/:id" element={<ProductDetails />} />
      <Route path="/address" element={<Address/>} />
    </Routes>
    </div>
  )
}

export default AllRoutes