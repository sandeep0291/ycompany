import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_PRODUCTS_BY_NAME, GET_ALL_PRODUCT } from "../../graphql/query";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  searchText: "",
  productList: [],
  isShowMoreItemLeft: true,
  isSearch: false,
  searchMoreResults: false,
  searchMoreOffset: 0,
  searchMoreLimit: 5,
  offset: 0,
  limit: 5,
  productCategory: [],
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  (arg, { getState }) => {
    const getProductState = getState().product;
    return axios({
      url: process.env.REACT_APP_API_BASEURL,
      method: "post",
      data: {
        query: GET_ALL_PRODUCT,
        variables: {
          limit: getProductState.limit,
          offset: getProductState.offset,
        },
      },
    }).then((result) => {
      return result.data.data.Products;
    });
  }
);

export const fetchProductsByName = createAsyncThunk(
  "product/fetchProductsByName",
  (name, { getState }) => {
    const getProductState = getState().product;
    return axios({
      url: process.env.REACT_APP_API_BASEURL,
      method: "post",
      data: {
        query: GET_PRODUCTS_BY_NAME,
        variables: {
          name,
          limit: getProductState.searchMoreLimit,
          offset: getProductState.searchMoreOffset,
        },
      },
    }).then((result) => {
      return {items: result.data.data.ProductSearchByName, searchText: name};
    });
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.productList = [];
      state.isSearch = false;
      state.searchMoreOffset = 0;
      state.offset = 0;
      state.searchText = "";
    },
    clearProductList: (state)=>{
      state.productList = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.isSearch = false;
      const productList = [...state.productList, ...action.payload];
      state.productList = productList;
      if (action.payload.length === state.limit) {
        state.offset += state.limit;
        state.isShowMoreItemLeft = true;
      } else {
        state.isShowMoreItemLeft = false;
      }
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchProductsByName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsByName.fulfilled, (state, action) => {
      state.loading = false;
      if(!state.isSearch){
        state.isSearch = true;
        state.productList = action.payload.items;
      }else{
        const productList = [...state.productList, ...action.payload.items];
        state.productList = productList;
      }
      state.searchText = action.payload.searchText;
      if (action.payload.items.length === state.limit) {
        state.searchMoreOffset += state.searchMoreLimit;
        state.searchMoreResults = true;
      } else {
        state.searchMoreResults = false;
      }
    });
    builder.addCase(fetchProductsByName.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
export const { clearSearch, clearProductList } = productSlice.actions;
