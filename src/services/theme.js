import { STORAGE_KEYS } from "../config/storage_keys.config";

export const THEME_KEY = "@airbnb-Token";

export const getTheme = () => {
  const theme = localStorage.getItem(STORAGE_KEYS.theme);

  if (theme === null) return "light";

  return JSON.parse(theme);
};

export const setTheme = (theme) => {
  if (theme === null) return localStorage.removeItem(STORAGE_KEYS.theme);

  localStorage.setItem(STORAGE_KEYS.theme, JSON.stringify(theme));
};
