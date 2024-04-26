// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './translations/en.json';
import tr from './translations/tr.json';
import ar from './translations/ar.json';
import fr from './translations/fr.json';
import fa from './translations/fa.json';

const resources = {
    en: { translation: en },
    tr: { translation: tr },
    ar: { translation: ar },
    fr: { translation: fr },
    fa: { translation: fa },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // initial language is English
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

