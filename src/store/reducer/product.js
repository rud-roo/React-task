import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  isLoading: true,
  errorMessage: "",
  products: []
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", 
  async () => {
    const response = await fetch(`http://localhost:3000/products`);
    const products = await response.json();
    return products;
  }
)

export const createProduct = createAsyncThunk(
  "products/createProduct", 
  async (product) => {
    const response = await fetch(`http://localhost:3000/products`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
				"Content-type": "application/json",
			},
    });
    const result = await response.json();
    console.log(result, "result")
    return result
  }
)

export const removeProduct = createAsyncThunk(
  "product/removeProducts",
  async (productId) => {
    await fetch(`http://localhost:3000/products/${productId}`, {
      method: "DELETE",
    })
    return productId;
  }
)

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
        state.products = [];
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        )
      })
  } 
})