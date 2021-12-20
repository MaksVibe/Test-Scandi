import Header from "../Header/Header";

const ListBtns = () => {
  return (
    <Header title="Product List">
      <ul class="header__btns">
        <li>
          <button type="button" class="btn" data-add-btn>
            Add
          </button>
        </li>
        <li>
          <button type="button" class="btn" id="delete-product-btn">
            mass delete
          </button>
        </li>
      </ul>
    </Header>
  );
};

export default ListBtns;
