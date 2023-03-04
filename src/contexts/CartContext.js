import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    return storedCartItems || {};
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (bookId, bookInfo) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [bookId]: bookInfo,
    }));
  };

  const removeFromCart = (bookId) => {
    if (bookId) {
      setCartItems((prevCartItems) => {
        const updatedCartItems = { ...prevCartItems };
        delete updatedCartItems[bookId];
        return updatedCartItems;
      });
    } else {
      setCartItems({});
    }
  };

  const updateCartItem = (bookId, count) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [bookId]: {
        ...prevCartItems[bookId],
        count,
      },
    }));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
