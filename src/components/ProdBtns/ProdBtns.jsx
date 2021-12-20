import Header from "../Header/Header";
import { Link } from "react-router-dom";

const ProdBtns = ({ handleClose }) => {
  return (
    <Header title="Add Product">
      <ul className="header__btns">
        <li>
          <button type="button" className="btn">
            save
          </button>
        </li>
        <li>
          <Link to="/" exact className="btn" onClick={handleClose}>
            cancel
          </Link>
        </li>
      </ul>
    </Header>
  );
};

export default ProdBtns;
