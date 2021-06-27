import React from "react";

import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";

function App() {
  return (
    <>
      <Header>Let's get started!</Header>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
