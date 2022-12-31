import React from 'react'
import { Box } from '@mui/material'
import ProductList from './ProductList'
import MainCarousel from './MainCarousel'

const Home = () => {
  return (
    <Box>
        <MainCarousel />
        <ProductList />
    </Box>
  )
}

export default Home