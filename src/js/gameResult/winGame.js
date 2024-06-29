import { showResultDisplay } from "../.."
import { delay } from "../delay"
import { searchedItem } from "../showDevil"
import { controlGameSounds } from "../sounds/controlGameSounds"
import { clearTimerCheckEndGame } from "../timerCheckEndGame"

export const winGame = () => {
	controlGameSounds('mainSound', 'pause')
	searchedItem.remove()
	delay(500).then(() => {
		showResultDisplay('YOU SURVIVED', 'result-display_win', 'result-display__button_win')
		controlGameSounds('win', 'play')
	})
	clearTimerCheckEndGame()
}