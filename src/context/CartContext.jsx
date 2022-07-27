import React, { createContext, useState } from 'react'


export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);
    const [costTotal, setCostTotal] = useState(0);
    const addCart = (item, qty) => {
        let costProduct = item.price * qty;
        const filtredData = cartList.filter(itemCart => itemCart.id == item.id);
        if (!filtredData.length) {
            setCartList([...cartList, {qty, ...item, costProduct}]);
            window.localStorage.setItem('cartList',JSON.stringify([...cartList]));
        }else{
            filtredData[0].qty = filtredData[0].qty + qty;
            costProduct = item.price * filtredData[0].qty;
            setCartList(filtredData);
            window.localStorage.setItem('cartList',JSON.stringify(filtredData));
        }
        setCostTotal(costTotal + costProduct);
    }

    const deletedProduct = (id) => {
        const filtredData = cartList.filter(item => item.id !== id);
        let costProduct = 0;
        filtredData.map(elem => {
            costProduct -= elem.price * elem.qty;  
        });
        setCostTotal(costProduct);
        setCartList(filtredData, {costProduct });
        window.localStorage.setItem('cartList', JSON.stringify(filtredData));
        
    }
  return (
    <CartContext.Provider value={{cartList, addCart, deletedProduct, costTotal, setCartList}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider