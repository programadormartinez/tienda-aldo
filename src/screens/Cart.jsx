import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import { ButtonContainer, ContentCart, Details, ImageCart, PriceDetail, Product, ProductAmount, ProductAmountContainer, ProductDetail, ProductPrice, ProductTotals, TitleCart, WrapperCart } from '../components/styledComponents';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const test = useContext(CartContext);
//   test.setCartList(JSON.parse(window.localStorage.getItem('cartList')))

  return (
      <WrapperCart>
        <Navbar cartDirect={true}></Navbar>
          <TitleCart>Tu carrito de compras</TitleCart>
          <ContentCart>
              {
                  test ? test.cartList.map(item => (
                      <Product key={item.id}>
                          <ProductDetail>
                              <ImageCart src={item.image} />
                              <Details>
                                  <span>
                                      <b>Producto:</b> {item.title}
                                  </span>
                                  <ButtonContainer onClick={() => test.deletedProduct(item.id)} className="">Eliminar producto
                                  </ButtonContainer>
                              </Details>
                          </ProductDetail>
                          <PriceDetail>
                              <ProductAmountContainer>
                              <ProductAmount> {item.qty} items / $ {item.price} cada uno</ProductAmount>
                              </ProductAmountContainer>
                              <ProductPrice>$ {item.costProduct}</ProductPrice>
                          </PriceDetail>
                  </Product>
                  )): <></>
              }
              
          </ContentCart>
          {
                  test ?
                      <ProductTotals>
                          <h1>Productos totales</h1>
                          <h3>$ {test.costTotal}</h3>
                      </ProductTotals>
                  : <h1>No hay productos</h1>
              }
      </WrapperCart>
  );
}

export default Cart