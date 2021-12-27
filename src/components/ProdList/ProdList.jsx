import "./ProdList.scss";
import ListBtns from "../ListBtns/ListBtns";
import { useSelector } from "react-redux";
import { useState } from "react";
import { deleteItems } from "../../redux/itemsReducer";
import { useDispatch } from "react-redux";

const ProdList = () => {
  const [toDelete, setToDelete] = useState([]);
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    toDelete.some((id) => id === e.target.parentNode.id)
      ? toDelete.splice(toDelete.indexOf(e.target.parentNode.id), 1)
      : setToDelete([...toDelete, e.target.parentNode.id]);
  };

  const handleClick = (e) => {
    console.log(`e.target`, e.target);
    dispatch(deleteItems(toDelete));
  };
  return (
    <div className="container">
      <ListBtns handleClick={handleClick} />
      <section className="products">
        <ul className="products__list">
          {!items && <p>Woops... There are no products, please, add some.</p>}
          {items &&
            items.map(({ id, sku, name, price, attribute, dimension }) => (
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
                {attribute && !dimension && <p>{attribute}</p>}
                {dimension && !attribute && <p>{dimension}</p>}
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default ProdList;
