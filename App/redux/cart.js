import {createSlice} from '@reduxjs/toolkit';
// Slice
const slice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
  },
  reducers: {
    addToCartSuccess: (state, action) => {
      //TODO: check if the product already in cart
      state.list = [...state.list, action.payload];
    },
    clearCartSuccess: (state, action) => {
      state.list = [];
    },
    increaseQty: (state, action) => {
      state.list = action.payload;
      state.list = {
        ...state.list,
        // [action.payload.id]: {
        //   ...item,
        //   quantity: cart[item.id]['quantity'] + 1,
        // },
      };
    },

    //TODO: handle + / - products qty
  },
});
export default slice.reducer;
// Actions
const {addToCartSuccess, clearCartSuccess, increaseQty} = slice.actions;

export const handleAddToCart = product => async dispatch => {
  try {
    dispatch(addToCartSuccess(product));
  } catch (e) {
    return console.error(e.message);
  }
};

//handle +1

export const handlePlus = product => async dispatch => {
  try {
    dispatch(increaseQty(product));
  } catch (e) {
    return console.error(e.message);
  }
};

export const handleClearCart = () => async dispatch => {
  try {
    dispatch(clearCartSuccess());
  } catch (error) {
    return console.error(error.message);
  }
};
