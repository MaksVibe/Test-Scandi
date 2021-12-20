import { useState } from "react";
import { Link } from "react-router-dom";
import ProdBtns from "../ProdBtns/ProdBtns";

const CardForm = () => {
  const [dvd, setDvd] = useState(null);
  const [book, setBook] = useState(null);
  const [furniture, setFurniture] = useState(null);

  const handleDvd = (e) => {
    console.log(e.target);
    setDvd("dvd");
    console.log("dvd", dvd);
  };
  const handleBook = () => {
    console.log("book", book);
  };
  const handleFurniture = () => {
    console.log("furniture", furniture);
  };

  return (
    <form>
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
      <label htmlFor="types">Type Switcher</label>
      <select name="types" id="cars">
        <option value=""></option>
        <option value="dvd" onClick={handleDvd}>
          DVD
        </option>
        <option value="book" onClick={handleBook}>
          Book
        </option>
        <option value="furniture" onClick={handleFurniture}>
          Furniture
        </option>
      </select>
    </form>
  );
};

export default CardForm;
