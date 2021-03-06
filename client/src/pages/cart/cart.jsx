import "./cart.scss";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/header";
import CartItem from "../../components/cartRow/cartRow";
import { clearCart } from "../../state-management/slices/cartSlice";
import { useState } from "react";

function Cart() {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isPaymentDone, setIsPaymentDone] = useState(false);

  const loadRazorPayScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorPay = async () => {
    const api = await loadRazorPayScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!api) {
      alert("Please check network");
      return;
    }
    const options = {
      key: "rzp_test_esbLMNrHV6xwER",
      currency: "INR",
      amount: cartState.totalAmount * 100,
      name: "YCompany Checkout",
      description: "This is testing env",
      handler: function () {
        dispatch(clearCart());
        setIsPaymentDone(true);
      },
      prefill: {
        name: "YCompany",
      },
    };

    const checkout = new window.Razorpay(options);
    checkout.open();
  };

  const renderCartItems = () => {
    if(cartState.cartItems.length === 0) return null;
    return (
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
          <p>
            <b>TOTAL: {cartState.totalAmount} /-</b>
          </p>
          <button className="btn btn-warning" onClick={displayRazorPay}>
            Checkout
          </button>
        </div>
      </>
    );
  };

  const cartEmpty = () => {
    return <div className="cart-empty">Your cart is empty</div>;
  };

  const renderPaymentSucess = () => {
    return (
      <h3 class="alert alert-success" role="alert">
        Your payment is sucessfully done!
      </h3>
    );
  };

  return (
    <div id="cartPage" className="page-container">
      <Header />
      <main className="container col-md-7">
        {cartState.cartItems.length === 0 && !isPaymentDone ? cartEmpty() : renderCartItems()}
        {isPaymentDone && renderPaymentSucess()}
      </main>
    </div>
  );
}

export default Cart;
