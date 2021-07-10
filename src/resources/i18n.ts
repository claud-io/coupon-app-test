import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      continue: "Continue",
      select: "Select",
      monitor: "beehive monitoring",
      certificate: "adoption certificate",
      honey: "honey",
      wizard: {
        0: {
          label: "Who are you?",
          placeholder: "name and surname",
        },
        1: {
          label: "Email",
          placeholder: "name@example.com",
        },
        2: {
          label: "Birthday date",
        },
      },
    },
  },
  it: {
    translation: {
      continue: "Continua",
      select: "Seleziona",
      monitor: "monitoraggio alveare",
      certificate: "certificato adozione",
      honey: "miele",
      wizard: {
        0: {
          label: "Chi Sei?",
          placeholder: "nome e cognome",
        },
        1: {
          label: "Email",
          placeholder: "name@example.com",
        },
        2: {
          label: "Data compleanno",
        },
      },
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
