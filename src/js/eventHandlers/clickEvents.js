import { startGame } from "../startGame/startGame"
import { changeRulesLanguage } from "../rules/changeRulesLanguage"
import { clickOnSearchObject } from "../searchedObject/clickOnSearchObject"
import { controlGameSounds } from "../sounds/controlGameSounds"
changeRulesLanguage

export const clickEvents = {
	'.rules__inner_en': () => {
		controlGameSounds('changeLanguage', 'play')
		changeRulesLanguage('none', 'block', 'ru')
	},
	'.rules__inner_ru': () => {
		controlGameSounds('changeLanguage', 'play')
		changeRulesLanguage('block', 'none', 'en')
	},
	'.play': startGame,
	'.result-display__button': () => {
		location.reload()
	},
	'.searched-item': clickOnSearchObject,
}