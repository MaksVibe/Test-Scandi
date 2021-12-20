import "./App.css";
import CardForm from "./components/CardForm/CardForm";
import ProdList from "./components/ProdList/ProdList";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ListBtns from "./components/ListBtns/ListBtns";
import ProdBtns from "./components/ProdBtns/ProdBtns";

const App = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [product, setProduct] = useState({});

  const handleOpen = () => {
    setIsAdd(true);
  };

  const handleClose = () => {
    setIsAdd(false);
  };

  return (
    <div className="container">
      {!isAdd && <ListBtns handleOpen={handleOpen} />}
      {isAdd && <ProdBtns handleClose={handleClose} />}
      <Routes>
        <Route path="/" exact element={<ProdList product={product} />} />
        <Route path="/addproduct" exact element={<CardForm />} />
      </Routes>
    </div>
  );
};

export default App;
