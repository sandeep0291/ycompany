import "./product.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItem, subtractItem } from "../../state-management/slices/cartSlice";

const Product = function ({ item }) {
  const dispatch = useDispatch();
  const cartState = useSelector((state) =>
    state.cart.cartItems.find((product) => product._id === item._id)
  );

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
            {cartState === undefined ? (
              <button
                type="button"
                onClick={() => dispatch(addItem(item))}
                className="btn btn-sm btn-outline-warning"
              >
                Add to cart
              </button>
            ) : (
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  onClick={() => dispatch(subtractItem(item))}
                  type="button"
                  className="btn btn-warning"
                >
                  -
                </button>
                <button type="button" className="btn btn-warning">
                  {cartState.qty}
                </button>
                <button
                  onClick={() => dispatch(addItem(item))}
                  type="button"
                  className="btn btn-warning"
                >
                  +
                </button>
              </div>
            )}

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
