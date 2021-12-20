import Header from "../Header/Header";

const ProdBtns = () => {
  return (
    <Header title="Product List">
      <ul class="header__btns">
        <li>
          <button type="button" class="btn" data-add-btn>
            save
          </button>
        </li>
        <li>
          <button type="button" class="btn" id="delete-product-btn">
            cancel
          </button>
        </li>
      </ul>
    </Header>
  );
};

export default ProdBtns;
