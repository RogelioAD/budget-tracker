import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Header />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
