import React, { useState, createContext } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

export const cartShowContext = createContext();
const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);
  const hideCartHandler = () => setCartIsShown(false);

  const cartShowContextValue = { showCartHandler, hideCartHandler };

  return (
    <CartProvider>
      <cartShowContext.Provider value={cartShowContextValue}>
        {cartIsShown && <Cart />}
        <Header />
      </cartShowContext.Provider>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
