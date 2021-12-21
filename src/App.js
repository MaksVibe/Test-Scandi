import "./App.css";
import CardForm from "./components/CardForm/CardForm";
import ProdList from "./components/ProdList/ProdList";
import React, { useState } from "react";
import { get, save } from "./components/services/localStorage";
import { Route, Routes } from "react-router-dom";
import ListBtns from "./components/ListBtns/ListBtns";
import ProdBtns from "./components/ProdBtns/ProdBtns";

const App = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [products, setProducts] = useState(null);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const handleSave = () => (products ? setIsAdd(true) : false);

  const handleOpen = () => {
    setIsAdd(true);
  };

  const handleClose = () => {
    setIsAdd(false);
  };

  return (
    <div className="container">
      {!isAdd && <ListBtns handleOpen={handleOpen} />}
      {isAdd && <ProdBtns handleClose={handleClose} handleSave={handleSave} />}
      <Routes>
        <Route
          path="/"
          exact
          element={products && <ProdList products={products} />}
        />
        <Route path="/addproduct" element={<CardForm />} />
      </Routes>
    </div>
  );
};

export default App;
