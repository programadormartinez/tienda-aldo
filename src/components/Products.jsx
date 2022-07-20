import { Container, Grid } from '@mui/material'
import React from 'react'
import Product from './Product'

const Products = () => {
  
  return (
    <div>
      <Container style={{paddingBottom: 200}}>
        <Grid container spacing={8} style={{margin: "auto"}}>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </Grid>
      </Container>
    </div>
  )
}

export default Products