import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'i18n',
  initialState: { languages: ['fr', 'en'], language: 'fr' },
  reducers: {
    onChangeLanguage: (state, { payload: { language } }) => {
      if (typeof language !== 'undefined') {
        state.language = language;
      }
    },
  },
});

export const { onChangeLanguage } = slice.actions;
export default slice.reducer;
