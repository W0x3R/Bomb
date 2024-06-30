import { getStorageLanguage } from "../languageStorage"
import { changeRulesLanguage } from "./changeRulesLanguage"

export const setRulesLanguage = () => {
	const currentLanguage = getStorageLanguage()
	currentLanguage === 'en' ? changeRulesLanguage('block', 'none', 'en') : changeRulesLanguage('none', 'block', 'ru')
}