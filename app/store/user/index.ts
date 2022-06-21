import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: { uuid: null },
  reducers: {
    onChangeUuid: (state, { payload: { uuid } }) => {
      if (typeof uuid !== 'undefined') {
        state.uuid = uuid;
      }
    },
  },
});

export const { onChangeUuid } = slice.actions;
export default slice.reducer;
