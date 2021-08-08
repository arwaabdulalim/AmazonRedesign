import {createSlice} from '@reduxjs/toolkit';
// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    testValue: 'arwa',
    logoutValue: 'NO',
    userTestCart: [],
    deleteAnItem: [],
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.logoutValue = 'YES';
    },
    addToCartSuccess: (state, action) => {
      // state.userTestCart.push(action.payload);
      state.userTestCart = [...state.userTestCart, action.payload];
    },
    deleteAnItemSuccess: (state, action) => {
      state.userTestCart = [];
    },
  },
});
export default slice.reducer;
// Actions
const {loginSuccess, logoutSuccess, addToCartSuccess, deleteAnItemSuccess} =
  slice.actions;
export const login = (username, password) => async dispatch => {
  try {
    console.log('HELLO LOGIN', username, password);
    const res = await fetch(
      'https://run.mocky.io/v3/13b9f25d-a8da-4e4b-be9b-d36665f2d0e9',
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json;
      });
    console.log('Resss', res);

    dispatch(loginSuccess({username, password}));
  } catch (e) {
    return console.error(e.message);
  }
};
export const logout = () => async dispatch => {
  try {
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};

export const handleAddToCart = product => async dispatch => {
  try {
    dispatch(addToCartSuccess(product));
  } catch (e) {
    return console.error(e.message);
  }
};
export const deleteItems = () => async dispatch => {
  try {
    dispatch(deleteAnItemSuccess());
  } catch (error) {
    return console.error(e.message);
  }
};
