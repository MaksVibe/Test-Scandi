import { useState } from "react";
import { Link } from "react-router-dom";
import ProdBtns from "../ProdBtns/ProdBtns";
import s from "./CardForm.module.css";

const CardForm = () => {
  const [dvd, setDvd] = useState(null);
  const [book, setBook] = useState(null);
  const [furniture, setFurniture] = useState(null);
  console.log(`dvd`, dvd);
  console.log(`book`, book);
  console.log(`furniture`, furniture);

  const handleChange = (e) => {
    switch (e.target.value.toLowerCase()) {
      case "dvd":
        setDvd("dvd");
        setBook(null);
        setFurniture(null);
        break;
      case "book":
        setDvd(null);
        setBook("book");
        setFurniture(null);
        break;
      case "furniture":
        setDvd(null);
        setBook(null);
        setFurniture("furniture");
        break;

      default:
        setDvd(null);
        setBook(null);
        setFurniture(null);
        break;
    }
  };

  return (
    <form className={s.CardForm}>
      <lable>
        SKU
        <input type="text"></input>
      </lable>
      <lable>
        Name
        <input type="text"></input>
      </lable>
      <lable>
        Price ($)
        <input type="text"></input>
      </lable>
      <div>
        <label htmlFor="types">
          Type Switcher
          <select
            name="types"
            className={s.FormSwitcher}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="dvd">DVD</option>
            <option value="book">Book</option>
            <option value="furniture">Furniture</option>
          </select>
        </label>
      </div>
      {dvd && (
        <lable>
          Size (MB)
          <input type="text"></input>
        </lable>
      )}
      {book && (
        <>
          <lable>
            Hight (CM)
            <input type="text"></input>
          </lable>
          <lable>
            Width (CM)
            <input type="text"></input>
          </lable>
          <lable>
            Length (CM)
            <input type="text"></input>
          </lable>
        </>
      )}
      {furniture && (
        <lable>
          Weight (KG)
          <input type="text"></input>
        </lable>
      )}
    </form>
  );
};

export default CardForm;
