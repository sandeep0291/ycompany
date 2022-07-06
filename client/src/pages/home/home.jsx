import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  clearSearch,
  fetchProductsByName,
} from "../../state-management/slices/productSlice";
import "./home.scss";
import Product from "../../components/product/product";
import Loader from "../../components/loader/loader";
import Header from "../../components/header/header";
import Offers from "../../components/offers/offers";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);

  useEffect(() => {
    if (!productState.productList.length) {
      dispatch(fetchProducts());
    }
  }, []);

  const renderProdcutList = () => {
    return productState.productList.map((item) => {
      return <Product item={item} key={item._id} />;
    });
  };

  const renderShowMore = () => {
    return (
      <div className="col-md-12 text-center">
        <button
          onClick={() => dispatch(fetchProducts())}
          className="btn btn-warning btn-sm"
        >
          Show more..
        </button>
      </div>
    );
  };

  const renderSearchShowMore = () => {
    return (
      <div className="col-md-12 text-center">
        <button
          onClick={() => dispatch(fetchProductsByName(productState.searchText))}
          className="btn btn-warning btn-sm"
        >
          Show more for searched...
        </button>
      </div>
    );
  };

  const renderSearchedRecords = () => {
    return (
      <div className="col-md-12 text-center">
        <p className="text-danger h5">
          Showing results for "{productState.searchText}" &nbsp;
          <button
            onClick={() => {
              dispatch(clearSearch());
              dispatch(fetchProducts());
            }}
            className="btn btn-sm btn-danger"
          >
            <i class="bi bi-x-circle-fill"></i> &nbsp;Clear
          </button>
        </p>
      </div>
    );
  };

  return (
    <div id="homePage" className="page-container">
      <Header />
      <Offers />
      <main className="container">
        {productState.isSearch ? renderSearchedRecords() : null}

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {productState.loading ? <Loader /> : renderProdcutList()}
        </div>

        {productState.isShowMoreItemLeft &&
        productState.productList.length &&
        !productState.isSearch
          ? renderShowMore()
          : null}
      </main>
    </div>
  );
}

export default Home;
