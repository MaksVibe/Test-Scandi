import { useState } from "react";
import { useDispatch } from "react-redux";
import ProdBtns from "../ProdBtns/ProdBtns";
import s from "./CardForm.module.css";
import { addItem } from "../../redux/itemsReducer";
import { nanoid } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

const CardForm = () => {
  const [dvd, setDvd] = useState(null);
  const [book, setBook] = useState(null);
  const [furniture, setFurniture] = useState(null);
  const [skuQ, setSkuQ] = useState("");
  const [nameQ, setNameQ] = useState("");
  const [priceQ, setPriceQ] = useState("");
  const [sizeQ, setSizeQ] = useState("");
  const [heightQ, setHeightQ] = useState("");
  const [widthQ, setWidthQ] = useState("");
  const [lengthQ, setLengthQ] = useState("");
  const [weightQ, setWeightQ] = useState("");

  const noOneOfAttr = !skuQ.length || !nameQ.length || !priceQ.length;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noOneOfAttr) return false;
    if (dvd && !book && !furniture)
      return (
        dispatch(
          addItem({
            id: nanoid(5),
            sku: skuQ,
            name: nameQ,
            price: priceQ,
            attribute: `Size: ${sizeQ}`,
          })
        ),
        history.goBack(),
        reset()
      );
    if (book && !dvd && !furniture)
      return (
        dispatch(
          addItem({
            id: nanoid(5),
            sku: skuQ,
            name: nameQ,
            price: priceQ,
            attribute: `Weight: ${weightQ}`,
          })
        ),
        history.goBack(),
        reset()
      );
    if (furniture && !book && !dvd)
      return (
        dispatch(
          addItem({
            id: nanoid(5),
            sku: skuQ,
            name: nameQ,
            price: priceQ,
            dimension: `Dimension: ${heightQ}x${widthQ}x${lengthQ}`,
          })
        ),
        history.goBack(),
        reset()
      );
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "sku":
        setSkuQ(e.target.value);
        break;
      case "name":
        setNameQ(e.target.value);
        break;
      case "price":
        setPriceQ(e.target.value);
        break;
      case "size":
        setSizeQ(e.target.value);
        break;
      case "height":
        setHeightQ(e.target.value);
        break;
      case "width":
        setWidthQ(e.target.value);
        break;
      case "length":
        setLengthQ(e.target.value);
        break;
      case "weight":
        setWeightQ(e.target.value);
        break;

      default:
        break;
    }
  };

  const changeProdType = (e) => {
    switch (e.target.value.toLowerCase()) {
      case "dvd":
        setDvd("DVD");
        setBook(null);
        setFurniture(null);
        break;
      case "book":
        setDvd(null);
        setBook("Book");
        setFurniture(null);
        break;
      case "furniture":
        setDvd(null);
        setBook(null);
        setFurniture("Furniture");
        break;

      default:
        setDvd(null);
        setBook(null);
        setFurniture(null);
        break;
    }
  };

  const reset = () => {
    setBook(null);
    setDvd(null);
    setFurniture(null);
    setHeightQ("");
    setLengthQ("");
    setNameQ("");
    setPriceQ("");
    setSizeQ("");
    setSkuQ("");
    setWeightQ("");
    setWidthQ("");
    document.getElementById("productType").selectedIndex = 0;
  };

  return (
    <div className="container">
      <ProdBtns handleSubmit={handleSubmit} />
      <form className={s.CardForm}>
        <label>
          SKU
          <input
            type="text"
            name="sku"
            value={skuQ}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={nameQ}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Price ($)
          <input
            type="text"
            name="price"
            value={priceQ}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label htmlFor="types">
          Type Switcher
          <select
            name="types"
            id="productType"
            className={s.FormSwitcher}
            onChange={changeProdType}
            required
          >
            <option value=""></option>
            <option value={dvd} name="dvd">
              DVD
            </option>
            <option value={book} name="book">
              Book
            </option>
            <option value={furniture} name="furniture">
              Furniture
            </option>
          </select>
        </label>
        {dvd && (
          <label>
            Size (MB)
            <input
              type="text"
              name="size"
              value={sizeQ}
              onChange={handleChange}
              required
            ></input>
          </label>
        )}
        {furniture && (
          <>
            <label>
              Height (CM)
              <input
                type="text"
                name="height"
                value={heightQ}
                onChange={handleChange}
                required
              ></input>
            </label>
            <label>
              Width (CM)
              <input
                type="text"
                name="width"
                value={widthQ}
                onChange={handleChange}
                required
              ></input>
            </label>
            <label>
              Length (CM)
              <input
                type="text"
                name="length"
                value={lengthQ}
                onChange={handleChange}
                required
              ></input>
            </label>
          </>
        )}
        {book && (
          <label>
            Weight (KG)
            <input
              type="text"
              name="weight"
              value={weightQ}
              onChange={handleChange}
              required
            ></input>
          </label>
        )}
      </form>
    </div>
  );
};

export default CardForm;
