import { en, Dictionary } from "./locales/en";
import { tr } from "./locales/tr";
import { de } from "./locales/de";
import { ru } from "./locales/ru";
import { ar } from "./locales/ar";

export const dictionaries = {
  en,
  tr,
  de,
  ru,
  ar,
};

export type { Dictionary } from "./locales/en";
export type Locale = keyof typeof dictionaries;

export const locales = Object.keys(dictionaries) as Locale[];

export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale] || dictionaries.en;
};
