import React from "react";
import "./App.css";
import Listing, { Item } from "./components/Listing";

const items: Item[] = require("./etsy.json");

function App() {
  return (
    <div>
      <Listing items={items} />
    </div>
  );
}

export default App;
