import { useFonts } from '@expo-google-fonts/inter';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Navigation from './navigation/navigation';
import i18nFunction from './services/i18n';
import { i18nInterface } from './store/i18n/interface';

export default function Controller() {
  const language = useSelector((state: i18nInterface) => state.i18n.language);
  const [loadI18n, setLoadI18n] = useState<boolean>(true);

  useEffect(() => {
    i18nFunction(language).then(() => {
      switch (language) {
        case 'en':
          require('moment/locale/en-gb');
          break;
        case 'fr':
        default:
          require('moment/locale/fr');
          break;
      }

      setLoadI18n(false);
    });
  }, [language]);

  const [fontsLoaded] = useFonts({
    'CubeCavern-Regular': require('../assets/fonts/CubeCavern-Regular.ttf'),
    'DegularText-Semibold': require('../assets/fonts/DegularText-Semibold.ttf'),
    'ProxyMonoBeta-Regular': require('../assets/fonts/ProxyMonoBeta-Regular.otf'),
    'PxGrotesk-Regular': require('../assets/fonts/PxGrotesk-Regular.ttf'),
    'RacingSansOne-Regular': require('../assets/fonts/RacingSansOne-Regular.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  if (loadI18n || !fontsLoaded) {
    // return splashScreen here
    return null;
  }

  return <Navigation />;
}
