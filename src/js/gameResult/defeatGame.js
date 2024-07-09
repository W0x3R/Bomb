import { showGameResult } from "../showGameResult"
import { delay } from "../delay"
import { searchedItem } from "../searchedObject/movingSearchObject"
import { controlGameSounds } from "../sounds/controlGameSounds"
import { clearTimerCheckEndGame } from "../checkEndGame/clearTimer"

export const defeatGame = () => {
	showGameResult('YOU DIED', 'result_defeat', 'result__button_defeat')
	searchedItem.remove()
	delay(8000).then(() => {
		controlGameSounds('defeatSecond', 'play')
	})
	delay(26000).then(() => {
		controlGameSounds('defeat', 'play')
	})
	clearTimerCheckEndGame()
}