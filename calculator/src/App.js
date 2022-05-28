import React from "react";
import { Context } from "./context";
import Header from "./components/header";
import Output from "./components/output";
import Keys from "./components/keys";

function App() {
  return (
    <Context>
      <div className="App">
        <main className="calculator-wrapper">
          <Header />
          <Output />
          <Keys />
        </main>
      </div>
    </Context>
  );
}

export default App;
