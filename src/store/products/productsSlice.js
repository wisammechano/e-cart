import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchProducts from "./productsApi";

const initialState = {
  data: [],
  loading: false,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(fetchProducts())`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const getProducts = createAsyncThunk(
  "products/getProducts",
  fetchProducts // <--- fetchProducts is already an async function so we just pass it here, otherwise we can define it.
  // the reason why fetchProducts is inside another file called productsApi, is because usually fetching from APIs isn't
  // as simple as calling fetch. It usually have other api credentials and configurations and it shouldn't sit with the
  // reducer logic.
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addProduct: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.data = state.data.filter((p) => (p.id = action.payload.id));
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// The function will not be used and is here just an example
export const selectProducts = (state) => state.products.data;

export default productsSlice.reducer;