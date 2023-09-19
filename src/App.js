import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [cartVisiblity, setCartVisiblity] = useState(false);

  const showCartHandler = () => {
    setCartVisiblity(true);
  };

  const hideCartHandler = () => {
    setCartVisiblity(false);
  };
  return (
    <>
      {cartVisiblity && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
