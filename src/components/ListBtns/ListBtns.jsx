import { Link } from "react-router-dom";
import Header from "../Header/Header";

const ListBtns = ({ handleOpen }) => {
  return (
    <Header title="Product List">
      <ul className="header__btns">
        <li>
          <Link to="/addproduct" className="btn" onClick={handleOpen}>
            Add
          </Link>
        </li>
        <li>
          <button type="button" className="btn deleteBtn">
            mass delete
          </button>
        </li>
      </ul>
    </Header>
  );
};

export default ListBtns;
