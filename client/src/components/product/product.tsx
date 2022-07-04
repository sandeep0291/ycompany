const Product = function ({ item }: any) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          src={item.image}
          className="img-fluid product-image"
          alt="product"
        />

        <div className="card-body">
          <b>{item.name}</b>
          <p className="card-text">{item.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-sm btn-outline-warning">
              Add to cart
            </button>
            <small className="text-muted">
              <b>Rs {item.price}</b>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
