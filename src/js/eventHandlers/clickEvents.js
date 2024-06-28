import { loadGame } from "../.."
import { showRussianLanguageIcon, showEnglishLanguageIcon } from "../rules"
import { controlGameSounds } from "../sounds/controlGameSounds"

export const clickEvents = {
	'.rules__inner_en': () => {
		controlGameSounds('changeLanguage', 'play')
		showRussianLanguageIcon()
	},
	'.rules__inner_ru': () => {
		controlGameSounds('changeLanguage', 'play')
		showEnglishLanguageIcon()
	},
	'.play': loadGame,
	'.result-display__button': () => {
		location.reload()
	},
}