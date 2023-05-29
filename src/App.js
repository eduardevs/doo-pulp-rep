import React, { useEffect, useState } from "react";
import { HomePage } from "./Pages/HomePage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
