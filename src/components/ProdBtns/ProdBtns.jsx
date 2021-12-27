import Header from "../Header/Header";
import { useHistory } from "react-router-dom";

const ProdBtns = ({ handleSubmit }) => {
  const history = useHistory();
  return (
    <Header title="Add Product">
      <ul className="header__btns">
        <li>
          <button className="btn" type="submit" onClick={handleSubmit}>
            save
          </button>
        </li>
        <li>
          <button className="btn" onClick={() => history.goBack()}>
            cancel
          </button>
        </li>
      </ul>
    </Header>
  );
};

export default ProdBtns;
