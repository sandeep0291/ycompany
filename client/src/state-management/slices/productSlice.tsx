import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_PRODUCTS_BY_NAME, GET_ALL_PRODUCT } from "../../graphql/query";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  productList: [],
  productCategory: [],
};

export const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return axios({
    url: process.env.REACT_APP_API_BASEURL,
    method: "post",
    data: {
      query: GET_ALL_PRODUCT,
    },
  }).then((result) => {
    return result.data.data.Products;
  });
});

export const fetchProductsByName = createAsyncThunk(
  "product/fetchProductsByName",
  (name) => {
    return axios({
      url: process.env.REACT_APP_API_BASEURL,
      method: "post",
      data: {
        query: GET_PRODUCTS_BY_NAME,
        variables: {
          name,
        },
      },
    }).then((result) => {
      return result.data.data.ProductSearchByName;
    });
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.productList = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchProductsByName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsByName.fulfilled, (state, action) => {
      state.loading = false;
      state.productList = action.payload;
    });
    builder.addCase(fetchProductsByName.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
