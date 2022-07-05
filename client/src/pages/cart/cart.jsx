import "./cart.scss";
import { useSelector } from "react-redux";
import Header from "../../components/header/header";
import CartItem from "../../components/cartRow/cartRow";

function Cart() {
  const cartState = useSelector((state) => state.cart);

  return (
    <div id="cartPage" className="page-container">
      <Header />
      <main className="container col-md-7">
        {cartState.cartItems.length === 0 ? (
          <div className="cart-empty">Your cart is empty</div>
        ) : (
          <>
            <table className="table table-striped table-hover table-borderless align-middle table-responsive">
              <thead>
                <tr>
                  <th scope="col" className="d-none d-sm-block d-xs-block">
                    Image
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Qty * Price</th>
                  <th scope="col">SubTotal</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartState.cartItems.map(function (item) {
                  return <CartItem item={item} key={item._id} />;
                })}
              </tbody>
            </table>
            <div className="total-and-checkout">
                <p><b>TOTAL: {cartState.totalAmount} /-</b></p>
                <button className="btn btn-warning">Checkout</button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default Cart;
