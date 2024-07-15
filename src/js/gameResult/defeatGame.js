import { showGameResult } from "./showGameResult"
import { delay } from "../delay"
import { searchObject } from "../searchObject/movingSearchObject"
import { clearTimerCheckEndGame } from "../checkEndGame/clearTimer"
import { constructSound } from "../sounds/constructSound"
import defeatSecondSound from '../../sounds/defeatSecondSound.mp3'
import defeatSound from '../../sounds/defeatSound.mp3'

export const defeatGame = () => {
	showGameResult('YOU DIED', 'result_defeat', 'result__button_defeat')
	searchObject.remove()
	delay(6000).then(() => {
		constructSound(defeatSecondSound)
	})
	delay(26000).then(() => {
		constructSound(defeatSound)
	})
	clearTimerCheckEndGame()
}