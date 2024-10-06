import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Product 1', price: '$100', description: 'This is the first product.' },
  { id: 2, name: 'Product 2', price: '$200', description: 'This is the second product.' },
  { id: 3, name: 'Product 3', price: '$300', description: 'This is the third product.' },
  { id: 4, name: 'Product 4', price: '$400', description: 'This is the fourth product.' },
  { id: 5, name: 'Product 5', price: '$500', description: 'This is the fifth product.' },
];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      return state.filter(product => product.id !== action.payload);
    },
  },
});

// สร้าง action creators
export const { addProduct, removeProduct } = productSlice.actions;

// สร้าง reducer
export default productSlice.reducer;
