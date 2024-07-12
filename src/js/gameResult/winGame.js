import { showGameResult } from "../showGameResult"
import { delay } from "../delay"
import { searchedItem } from "../searchedObject/movingSearchObject"
import { controlGameSounds } from "../sounds/controlGameSounds"
import { clearTimerCheckEndGame } from "../checkEndGame/clearTimer"

export const winGame = () => {
	controlGameSounds('mainSound', 'pause')
	searchedItem.remove()
	delay(800).then(() => {
		showGameResult('YOU SURVIVED', 'result_win', 'result__button_win')
		controlGameSounds('win', 'play')
	})
	clearTimerCheckEndGame()
}