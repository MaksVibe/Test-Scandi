import "./ProdList.scss";
import ListBtns from "../ListBtns/ListBtns";
import { useSelector } from "react-redux";
import { useState } from "react";
import { deleteItems } from "../../redux/itemsReducer";

const ProdList = () => {
  const [chacked, setChacked] = useState([]);
  const items = useSelector((state) => state.items.items);
  const handleChange = (e) => {
    setChacked(e.target.parentNode.id);
  };
  console.log(`chacked`, chacked);

  const handleClick = () => {
    deleteItems(chacked);
  };
  return (
    <div className="container">
      <ListBtns handleClick={handleClick} />
      <section className="products">
        <ul className="products__list">
          {!items && <p>Woops... There are no products, please, add some.</p>}
          {items &&
            items.map(({ id, sku, name, price, attribute, dimention }) => (
              <li key={id} id={id} className="products__card">
                <input
                  type="checkbox"
                  className="delete-checkbox"
                  name="delete"
                  id="check"
                  onChange={handleChange}
                />
                <p>{name}</p>
                <p>{price}</p>
                {attribute && !dimention && <p>{attribute}</p>}
                {dimention && !attribute && (
                  <p>
                    {dimention.hight}x{dimention.width}x{dimention.length}
                  </p>
                )}
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default ProdList;
