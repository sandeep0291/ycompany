import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../state-management/slices/productSlice";
import "./home.scss";
import Product from "../../components/product/product";
import Loader from "../../components/loader/loader";
import Header from "../../components/header/header";
import Offers from "../../components/offers/offers";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const productList = useSelector((state)=> state.product);

  useEffect(()=>{
    dispatch(fetchProducts());
  }, [])

  return (
    <div id="homePage" className="page-container">
      <Header />
      <Offers />
      <main className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {productList.loading
            ? <Loader />
            : productList.productList.map((item) => {
                return (
                  <Product item={item} key={item._id} />
                );
              })}
        </div>
      </main>
    </div>
  );
}

export default Home;
