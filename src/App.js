import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./app/styles";

const App = () => {
  const text = "Welcome";

  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <ItemListContainer saludo={text} />
    </div>
  );
};

export default App;
