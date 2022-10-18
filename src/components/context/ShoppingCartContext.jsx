import React, { createContext, useContext, useState } from 'react';
import { SHOP_DATA, getProductData } from '../../data';

const ShoppingCartContext = createContext({
  items: [],
  // dont define functions w/n context -- code below to pass to provider: 
  getProductQuantity: () => {},
  addOneItemToCart: () => {},
  removeOneItemFromCart: () => {},
  deleteItemFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({children}) {
  const [cartProducts, setCartProducts ] = useState([]);
  
  function getProductQuantity(id) {
   const quantity = cartProducts.find(product => product.id === id)?.quantity

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneItemToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {  //if product is not in cart
      setCartProducts(
        [
          ...cartProducts, // copy cart objects
          {
            id: id,
            quantity: 1    // add new item to cart w/ quantity of 1
          }
        ]
      )
    } else {
      setCartProducts(
        cartProducts.map(
          product => product.id === id ?      // turnary: Does id match?
          {...product, quantity: product.quantity +1}  // Yes - invoke
          :                                                 // or
          product                                     // No -- leave product as is
        )
      )
    }
  }

  function deleteItemFromCart(id) {
    setCartProducts(
      cartProducts => cartProducts.filter(currentProduct => {
        return currentProduct.id !== id;
      })
    )
  }

  function removeOneItemFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteItemFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          product => product.id === id ?
          {...product, quantity: product.quantity - 1}
          : 
          product
        )
      )
    }
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += (productData.price * cartItem.quantity);
      return totalCost;
    });
  }

  const contextValue = {
    items: [],
    getProductQuantity,
    addOneItemToCart,
    removeOneItemFromCart,
    deleteItemFromCart,
    getTotalCost
  }

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default CartProvider;
// context (cart, addToCart, removeFromCart)
// Provider -> gives React app access to all things in context