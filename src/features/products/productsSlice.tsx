import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../services/api';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductsState {
  items: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const getProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  'products/getProducts',
  async (_, thunkAPI) => {
    try {
      const products = await fetchProducts();
      return products;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch products.');
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? 'An error occurred.';
      });
  },
});

export default productsSlice.reducer;
