import { getStorageLanguage } from "./languageStorage"
import { changeRulesLanguage } from "./rules"

export function setRulesLanguage() {
	const currentLanguage = getStorageLanguage()
	currentLanguage === 'en' ? changeRulesLanguage('block', 'none', 'en') : changeRulesLanguage('none', 'block', 'ru')
}