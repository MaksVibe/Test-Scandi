const ProdList = ({ products }) => {
  return (
    <>
      {!products && <p>Woops... There are no products, please, add some.</p>}
      {products &&
        products.map(({ sku, name, price, attribute, dimention }) => (
          <ul>
            <li key={sku}>
              <p>{name}</p>
              <p>{price}</p>
              {attribute && <p>{attribute}</p>}
              {dimention && (
                <p>
                  {dimention.hight}x{dimention.width}x{dimention.length}
                </p>
              )}
            </li>
          </ul>
        ))}
    </>
  );
};

export default ProdList;
