import { startGame } from "../startGame/startGame"
import { changeRulesLanguage } from "../rules/changeRulesLanguage"
import { clickOnSearchObject } from "../searchObject/clickOnSearchObject"
import { constructSound } from "../sounds/constructSound"
import languageSound from '../../sounds/changeLanguageSound.mp3'


export const clickEvents = {
	'.rules__btn-en': () => {
		constructSound(languageSound)
		changeRulesLanguage('none', 'block', 'ru')
	},
	'.rules__btn-ru': () => {
		constructSound(languageSound)
		changeRulesLanguage('block', 'none', 'en')
	},
	'.play': startGame,
	'.result__button': () => {
		location.reload()
	},
	'.search-object': clickOnSearchObject,
}