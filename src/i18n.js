import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_en from './translations/en.json';
import common_ph from './translations/ph.json';
import common_th from './translations/th.json';

const resources = {
    en: {
        translation: common_en
    },
    ph: {
        translation: common_ph
    },
    th: {
        translation: common_th
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;