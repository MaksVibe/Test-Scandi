import { useState } from "react";
import s from "./CardForm.module.css";
import { get, save } from "../services/localStorage";

const PRODUCTS = "products";

const CardForm = () => {
  const [dvd, setDvd] = useState(null);
  const [book, setBook] = useState(null);
  const [furniture, setFurniture] = useState(null);
  const [skuQ, setSkuQ] = useState("");
  const [nameQ, setNameQ] = useState("");
  const [priceQ, setPriceQ] = useState("");
  const [typeQ, setTypeQ] = useState("");
  const [sizeQ, setSizeQ] = useState("");
  const [heightQ, setHeightQ] = useState("");
  const [widthQ, setWidthQ] = useState("");
  const [lengthQ, setLengthQ] = useState("");
  const [weightQ, setWeightQ] = useState("");

  const handleSubmit = (e) => {
    e.prevent.default();
    console.log(`e.target`, e.target);
    const localItems = get(PRODUCTS);
    if (dvd) {
      save({
        dvd: {
          sku: "JVC200123",
          name: "Acme DISC",
          price: "1.00 $",
          attribute: "Size: 700MB",
        },
        ...localItems,
      });
      if (book) {
        save({
          book: {
            sku: "GGWP0007",
            name: "War and Peace",
            price: "20.00 $",
            attribute: "Weight: 2KG",
          },
          ...localItems,
        });
        if (furniture) {
          save({
            furniture: {
              sku: "TR120555",
              name: "Chair",
              price: "40.00 $",
              dimension: { height: 24, width: 45, length: 15 },
            },
            ...localItems,
          });
        }
      }
    }
  };

  const handleChange = (e) => {
    console.log(`e.target.name`, e.target.name);
    console.log(`e.target.value`, e.target.value);
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

  return (
    <form className={s.CardForm} onSubmit={handleSubmit}>
      <lable>
        SKU
        <input
          type="text"
          name="sku"
          value={skuQ}
          onChange={handleChange}
          required
        ></input>
      </lable>
      <lable>
        Name
        <input
          type="text"
          name="name"
          value={nameQ}
          onChange={handleChange}
          required
        ></input>
      </lable>
      <lable>
        Price ($)
        <input
          type="text"
          name="price"
          value={priceQ}
          onChange={handleChange}
          required
        ></input>
      </lable>
      <div>
        <label htmlFor="types">
          Type Switcher
          <select
            name="types"
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
      </div>
      {dvd && (
        <lable>
          Size (MB)
          <input
            type="text"
            name="size"
            value={sizeQ}
            onChange={handleChange}
            required
          ></input>
        </lable>
      )}
      {book && (
        <>
          <lable>
            Height (CM)
            <input
              type="text"
              name="height"
              value={heightQ}
              onChange={handleChange}
              required
            ></input>
          </lable>
          <lable>
            Width (CM)
            <input
              type="text"
              name="width"
              value={widthQ}
              onChange={handleChange}
              required
            ></input>
          </lable>
          <lable>
            Length (CM)
            <input
              type="text"
              name="length"
              value={lengthQ}
              onChange={handleChange}
              required
            ></input>
          </lable>
        </>
      )}
      {furniture && (
        <lable>
          Weight (KG)
          <input
            type="text"
            name="weight"
            value={weightQ}
            onChange={handleChange}
            required
          ></input>
        </lable>
      )}
    </form>
  );
};

export default CardForm;
