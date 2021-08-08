import {createSlice} from '@reduxjs/toolkit';
// Slice
const slice = createSlice({
  name: 'list',
  initialState: {
    list: [],
  },
  reducers: {
    addToListSuccess: (state, action) => {
      //TODO: check if the product already in cart
      state.list = [...state.list, action.payload];
    },
    clearListSuccess: (state, action) => {
      state.list = [];
    },

    //TODO: handle + / - products qty
  },
});
export default slice.reducer;
// Actions
const {addToListSuccess, clearListSuccess} = slice.actions;

export const handleAddToList = product => async dispatch => {
  try {
    dispatch(addToListSuccess(product));
  } catch (e) {
    return console.error(e.message);
  }
};

export const handleClearList = () => async dispatch => {
  try {
    dispatch(clearListSuccess());
  } catch (error) {
    return console.error(error.message);
  }
};
