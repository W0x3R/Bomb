import { setStorageLanguage } from "./languageStorage"
import { rulesTextObject } from "./rules/rulesTextObject"

export const rules = document.querySelector('.rules')
const englishLanguageIcon = document.querySelector('.rules__inner_en')
const russianLanguageIcon = document.querySelector('.rules__inner_ru')
const rulesBlock = document.querySelector('.rules__inner')
const rulesText = document.querySelector('.rules__inner-text')

export const changeRulesLanguage = (enDisplay, ruDisplay, language) => {
	englishLanguageIcon.style.display = enDisplay
	russianLanguageIcon.style.display = ruDisplay
	rulesText.innerHTML = rulesTextObject[language]
	setStorageLanguage(language)
}

export { englishLanguageIcon, russianLanguageIcon, rulesBlock, rulesText } 