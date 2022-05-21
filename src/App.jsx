import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
