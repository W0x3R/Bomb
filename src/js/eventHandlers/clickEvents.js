import { loadGame } from "../.."
import { changeRulesLanguage } from "../rules"
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
	'.play': loadGame,
	'.result-display__button': () => {
		location.reload()
	},
}