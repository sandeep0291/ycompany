import {
  removeItem,
  subtractItem,
  addItem,
} from "../../state-management/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = function ({ item }) {
  const dispatch = useDispatch();

  return (
    <tr>
      <th scope="row" className="d-none d-sm-block d-xs-block">
        <picture className="product-thumbnail">
          <img className="img-thumbnail" src={item.image} alt="" />
        </picture>
      </th>
      <td>{item.name}</td>
      <td>
        {item.qty} * {item.price}
      </td>
      <td>Rs {item.qty * item.price}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            onClick={() => dispatch(subtractItem(item))}
            type="button"
            className="btn btn-warning btn-sm"
          >
            -
          </button>
          <button type="button" className="btn btn-warning btn-sm">
            {item.qty}
          </button>
          <button
            onClick={() => dispatch(addItem(item))}
            type="button"
            className="btn btn-warning btn-sm"
          >
            +
          </button>
        </div>
        <button
          className="btn btn-sm"
          onClick={() => dispatch(removeItem(item._id))}
        >
          <i className="bi bi-trash3-fill yellow"></i>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
