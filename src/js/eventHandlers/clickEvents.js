import { startGame } from "../startGame/startGame"
import { changeRulesLanguage } from "../rules/changeRulesLanguage"
import { clickOnSearchObject } from "../searchedObject/clickOnSearchObject"
import { constructClickSound } from "../sounds/constructClickSound"
import languageSound from '../../sounds/changeLanguageSound.mp3'


export const clickEvents = {
	'.rules__btn-en': () => {
		constructClickSound(languageSound)
		changeRulesLanguage('none', 'block', 'ru')
	},
	'.rules__btn-ru': () => {
		constructClickSound(languageSound)
		changeRulesLanguage('block', 'none', 'en')
	},
	'.play': startGame,
	'.result__button': () => {
		location.reload()
	},
	'.searched-item': clickOnSearchObject,
}