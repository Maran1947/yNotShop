import { CartProduct, Product } from "@/interfaces/product";
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  products: CartProduct[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      window.localStorage.setItem("products", JSON.stringify(state.products));
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (cartProduct) => cartProduct.product.id !== action.payload.id
      );
      window.localStorage.setItem("products", JSON.stringify(state.products));
    },
    removeAllProducts: (state) => {
      state.products = []
      window.localStorage.removeItem("products")
    },
    loadProducts: (state) => {
      const products = window.localStorage.getItem("products");
      state.products = products ? JSON.parse(products) : [];
    },
    updateProductQty: (state, action) => {
      const updatedCartProducts = state.products.map((cartProduct) => {
        if (cartProduct.product.id === action.payload.id) {
          cartProduct.qty += action.payload.qty;
        }
        return cartProduct;
      });

      state.products = updatedCartProducts.filter((cartProduct) => cartProduct.qty > 0)
      window.localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const { addProduct, removeProduct, removeAllProducts, loadProducts, updateProductQty } =
  cartSlice.actions;

export default cartSlice.reducer;
