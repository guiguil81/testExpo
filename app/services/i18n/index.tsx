import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Example from './exemple';

const resources = {
  en: {
    translation: {
      ...Example.en,
    },
  },
  fr: {
    translation: {
      ...Example.fr,
    },
  },
};

function i18nFunction(language: string) {
  return i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: language,

      keySeparator: false, // we do not use keys in form messages.welcome

      interpolation: {
        escapeValue: false, // react already safes from xss
      },
      compatibilityJSON: 'v3',
    })
    .then(() => true);
}

export default i18nFunction;
