import Header from "../Header/Header";
import { Link } from "react-router-dom";

const ProdBtns = ({ handleClose }) => {
  return (
    <Header title="Add Product">
      <ul className="header__btns">
        <li>
          <Link to="/" exact className="btn">
            save
          </Link>
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
