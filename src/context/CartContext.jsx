import React, { createContext, useContext, useEffect, useState } from 'react'
import { AlertContext } from './AlertContext';


export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);
    const [costTotal, setCostTotal] = useState(0);
    const {handleClick} = useContext(AlertContext);
    
    useEffect(() => {
        calculateCostTotal();
    }, [cartList])
    
    const addCart = (item, qty) => {
        let costProduct = item.price * qty;
        const filtredData = cartList.filter(itemCart => itemCart.id == item.id);
        handleClick('Producto agregado al carrito', 'success');
        if (!filtredData.length) {
            setCartList([...cartList, {qty, ...item, costProduct}]);
            window.localStorage.setItem('cartList',JSON.stringify([...cartList]));
        }else{
            let index = cartList.indexOf(filtredData[0]);
            cartList[index].qty = cartList[index].qty + qty;
            setCartList(cartList);
            window.localStorage.setItem('cartList',JSON.stringify(filtredData));
        }
    }

    const deletedProduct = (id) => {
        const filtredData = cartList.filter(item => item.id !== id);
        setCartList(filtredData);
        window.localStorage.setItem('cartList', JSON.stringify(filtredData));
        handleClick('Producto eliminado del carrito', 'warning');
    }

  
    const calculateCostTotal = () => {
        let costTotal = 0;
        cartList.map(item => {
            let cost = item.qty * item.price;
            costTotal +=cost; 
        })
        setCostTotal(costTotal);
    }
  return (
    <CartContext.Provider value={{cartList, addCart, deletedProduct, costTotal, setCartList, calculateCostTotal}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider