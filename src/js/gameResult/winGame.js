import { showResultDisplay } from "../showResultDisplay"
import { delay } from "../delay"
import { searchedItem } from "../searchedObject/movingSearchObject"
import { controlGameSounds } from "../sounds/controlGameSounds"
import { clearTimerCheckEndGame } from "../checkEndGame/clearTimer"

export const winGame = () => {
	controlGameSounds('mainSound', 'pause')
	searchedItem.remove()
	delay(500).then(() => {
		showResultDisplay('YOU SURVIVED', 'result-display_win', 'result-display__button_win')
		controlGameSounds('win', 'play')
	})
	clearTimerCheckEndGame()
}