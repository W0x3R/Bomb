export const getStorageLanguage = () => localStorage.getItem('language') || 'en'

export const setStorageLanguage = (value) => localStorage.setItem('language', value)