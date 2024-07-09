import { setStorageLanguage } from "../languageStorage"
import { rulesTextObject } from "./rulesTextObject"

const englishLanguageIcon = document.querySelector('.rules__btn-en')
const russianLanguageIcon = document.querySelector('.rules__btn-ru')
const rulesText = document.querySelector('.rules__text')

export const changeRulesLanguage = (enDisplay, ruDisplay, language) => {
	englishLanguageIcon.style.display = enDisplay
	russianLanguageIcon.style.display = ruDisplay
	rulesText.innerHTML = rulesTextObject[language]
	setStorageLanguage(language)
}