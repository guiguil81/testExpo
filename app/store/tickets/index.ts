import { createSlice } from '@reduxjs/toolkit';

const cue: any[] = [];

const slice = createSlice({
  name: 'tickets',
  initialState: { cue },
  reducers: {
    addCue: (state, { payload: { tkid } }) => {
      if (typeof tkid !== 'undefined') {
        state.cue.push(tkid);
      }
    },
    removeCue: (state, { payload: { tkid } }) => {
      if (typeof tkid !== 'undefined') {
        state.cue = state.cue.filter((value) => value !== tkid);
      }
    },
  },
});

export const { addCue, removeCue } = slice.actions;
export default slice.reducer;
