import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
  LOADING: "loading",
  IDLE: "idle",
  PROCESSING: "processing",
  ERROR: "error",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.PROCESSING,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;
export { STATUSES };

// thunk

function fetchProduct() {
  return async function requestThunk(dispatch) {
    dispatch(setStatus(STATUSES.PROCESSING));
    try {
      const req = await fetch("https://fakestoreapi.com/products");
      const res = await req.json();
      dispatch(setProducts(res));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export { fetchProduct };
