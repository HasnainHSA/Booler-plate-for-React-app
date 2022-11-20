import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
      data: [],
      status: STATUSES.IDLE,
  },
  reducers: {
      // setProducts(state, action) {
      //     state.data = action.payload;
      // },
      // setStatus(state, action) {
      //     state.status = action.payload;
      // },
  },
  extraReducers: (builder) => {
      builder
          .addCase(fetchProducts.pending, (state, action) => {
              state.status = STATUSES.LOADING;
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
              state.data = action.payload;
              state.status = STATUSES.IDLE;
          })
          .addCase(fetchProducts.rejected, (state, action) => {
              state.status = STATUSES.ERROR;
          });
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;



// thunks
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
});




// export function fetchproducts(){
//  return async function fetchProductThunk (dispatch, getState){
//     dispatch(getStatus(STATUS.LOADING))
//     try {

//         const res = await fetch('https://fakestoreapi.com/products');
//         const data = await res.json(); 
//         dispatch(setproduct(data))
//         dispatch(getStatus(STATUS.IDLE))

//     } 
    
//     catch (error) {
//         console.log(error)
//         dispatch(getStatus(STATUS.Error))
//     }
//  }
// }