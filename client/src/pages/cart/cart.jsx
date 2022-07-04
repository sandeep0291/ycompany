import "./cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../state-management/slices/productSlice";
import Header from "../../components/header/header";
import { useEffect } from "react";

function Cart() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div id="cartPage"className="page-container">
      <Header />
      <main className="container col-md-7">
        <div className="cart-row font-color-blue">
          <p>Image</p>
          <p>Item Name</p>
          <p>Qty</p>
          <p>Price</p>
          <p>Action</p>
        </div>
        <div className="cart-row">
          <picture className="product-thumbnail">
            <img
              className="img-thumbnail"
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2019/3/10/b6a2b0e5-9c4b-4283-9b34-21a306468ef51552177042449-1.jpg"
              alt=""
            />
          </picture>

          <p>Roadester Size M</p>
          <p>1</p>
          <p>Rs 2000</p>
          <button className="btn btn-sm ">
            <i class="bi bi-trash3-fill blue"></i>
          </button>
        </div>
        <div className="cart-row">
          <picture className="product-thumbnail">
            <img
              className="img-thumbnail"
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2019/3/10/b6a2b0e5-9c4b-4283-9b34-21a306468ef51552177042449-1.jpg"
              alt=""
            />
          </picture>

          <p>Roadester Size M</p>
          <p>1</p>
          <p>Rs 2000</p>
          <button className="btn btn-sm ">
            <i class="bi bi-trash3-fill blue"></i>
          </button>
        </div>

        <div className="cart-row font-color-blue cart-total">
          <p><b>Total:</b> <span>Rs 14000</span></p>
        </div>
      </main>
    </div>
  );
}

export default Cart;
