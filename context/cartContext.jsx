/* eslint-disable prettier/prettier */
import { createContext, useState } from "react";

//Contexto creado
export const CartContext = createContext();

//Provider Creado
export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const addToCart = (product, quantityToAdd) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const updatedCart = cart.map((item, index) =>
        index === productInCartIndex
          ? { ...item, quantity: item.quantity + quantityToAdd }
          : item
      );
      setCart(updatedCart);
      return updatedCart;
    }

    const updatedCart = [...cart, { ...product, quantity: quantityToAdd }];
    setCart(updatedCart);
    return updatedCart;
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    return updatedCart;
  };

  const clearCart = () => {
    const updatedCart = [];
    setCart(updatedCart);
    return updatedCart;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}