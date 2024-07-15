import winSound from '../../sounds/winSound.mp3'
import { showGameResult } from "./showGameResult"
import { delay } from "../delay"
import { searchedItem } from "../searchedObject/movingSearchObject"
import { controlGameSounds } from "../sounds/controlGameSounds"
import { clearTimerCheckEndGame } from "../checkEndGame/clearTimer"
import { constructSound } from "../sounds/constructSound"

export const winGame = () => {
	controlGameSounds('mainSound', 'pause')
	searchedItem.remove()
	delay(800).then(() => {
		showGameResult('YOU SURVIVED', 'result_win', 'result__button_win')
		constructSound(winSound)
	})
	clearTimerCheckEndGame()
}