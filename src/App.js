import React, { useState, createContext } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

export const cartShowContext = createContext();
const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);
  const hideCartHandler = () => setCartIsShown(false);

  const cartShowContextValue = { showCartHandler, hideCartHandler };

  return (
    <>
      <cartShowContext.Provider value={cartShowContextValue}>
        {cartIsShown && <Cart />}
        <Header />
        <main>
          <Meals />
        </main>
      </cartShowContext.Provider>
    </>
  );
};

export default App;
