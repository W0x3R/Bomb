import { showResultDisplay } from "../showResultDisplay"
import { delay } from "../delay"
import { searchedItem } from "../searchedObject/movingSearchObject"
import { controlGameSounds } from "../sounds/controlGameSounds"
import { clearTimerCheckEndGame } from "../checkEndGame/clearTimer"

export const defeatGame = () => {
	showResultDisplay('YOU DIED', 'result-display_defeat', 'result-display__button_defeat')
	searchedItem.remove()
	delay(8000).then(() => {
		controlGameSounds('defeat', 'play')
	})
	delay(26000).then(() => {
		controlGameSounds('defeatSecond', 'play')
	})
	clearTimerCheckEndGame()
}