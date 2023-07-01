import React from "react";
import Preloader from "./components/Preloader";
import Timer from "./components/Timer";
import Optin from "./components/Optin";

import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Pyyre
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

export default App;
