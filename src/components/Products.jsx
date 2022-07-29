import { Container, Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Product from './Product'
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from '../configurations/firebaseConfig';
import Loading from '../screens/Loading/Loading';
import { CategoryContext } from '../context/CategoryContext';

const Products = ({}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoryId} = useContext(CategoryContext);
  const getProducts =  () =>  {
    setProducts([]);
    let q = '';
    if (categoryId) {
       q = query(collection(firestore, "products"), where("category_id", "==", categoryId));
    }else{
      q = query(collection(firestore, "products"));
    }
    getDocs(q).then(querySnapshot => {
      setLoading(false);
      querySnapshot.docs.map((item)=> {
        let product = item.data();
        product.id = item.id;
        const last_position = (prod) => {
          return [...prod, product]
        }
        setProducts(last_position);
      })
    })
    .catch(err => {
        console.log(err);
    })
  }


  useEffect(()=> {
    getProducts(categoryId)
  }, [categoryId])
  
  

  return (
    <div>
      <Container style={{paddingBottom: 200}}>
        <Grid container spacing={8} style={{margin: "auto"}}>
          {
            
            !loading  ? 
              products.length ? products?.map((item) => {
                return (
                  <Product product={item} key={item.id}></Product>
              )
              
                }) : <> ...Cargando</>
             : <Loading></Loading>
          }
        </Grid>
      </Container>
    </div>
  )
}

export default Products