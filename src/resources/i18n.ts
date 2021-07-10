import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      select: "Select",
      monitor: "beehive monitoring",
      certificate: "adoption certificate",
      honey: "honey",
    },
  },
  it: {
    translation: {
      select: "Seleziona",
      monitor: "monitoraggio alveare",
      certificate: "certificato adozione",
      honey: "miele",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "it",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
