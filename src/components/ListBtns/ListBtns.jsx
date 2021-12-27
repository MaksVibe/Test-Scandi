import { Link } from "react-router-dom";
import Header from "../Header/Header";

const ListBtns = ({ handleClick }) => {
  return (
    <Header title="Product List">
      <ul className="header__btns">
        <li>
          <Link to="/addproduct" className="btn">
            Add
          </Link>
        </li>
        <li>
          <button type="button" className="btn" onClick={handleClick}>
            mass delete
          </button>
        </li>
      </ul>
    </Header>
  );
};

export default ListBtns;
