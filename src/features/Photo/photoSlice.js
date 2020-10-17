const { createSlice } = require('@reduxjs/toolkit');

const photo = createSlice({
  name: 'photos',
  initialState: [],
  reducers: {
    addPhoto: (state, action) => {
      // không cần quan tâm đến inmutate
      state.push(action.payload);
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto } = actions;
export default reducer;
