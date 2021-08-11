import {createSlice} from '@reduxjs/toolkit';
// Slice
const slice = createSlice({
  name: 'cart',
  initialState: {
    list: {},
  },
  reducers: {
    addToCartSuccess: (state, action) => {
      //TODO: check if the product already in cart
      const item = action.payload;
      const newList = {...state.list,[item.id]:{
        ...item,
        quantity:1
      }}
      state.list = newList;
    },
    clearCartSuccess: (state, action) => {
      state.list = [];
    },
    increaseQty: (state, action) => {
      const item = action.payload;
      const newList = {...state.list,[item.id]: {
        ...item,
        quantity: state.list[item.id]['quantity'] + 1,
      }}
      
      state.list = newList;
    },
    decreaseQty: (state, action) => {
      const item = action.payload;
      const newList = {...state.list,[item.id]: {
        ...item,
        quantity: state.list[item.id]['quantity'] -1,
      }}
      
      state.list = newList;
    },

    //TODO: handle + / - products qty
  },
});
export default slice.reducer;
// Actions
const {addToCartSuccess, clearCartSuccess, increaseQty,decreaseQty} = slice.actions;

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
    debugger;
    dispatch(increaseQty(product));
  } catch (e) {
    return console.error(e.message);
  }
};


//handle  -1

export const handleMins = product => async dispatch => {
  try {
    dispatch(decreaseQty(product));
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
