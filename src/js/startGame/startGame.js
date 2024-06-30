import { addStartingStyles, startGameButton } from "./addStartingStyles"
import { scaleDevil } from "../devil/scaleDevil"
import { showDevil } from "../devil/showDevil"
import { startTimerCheckEndGame } from "../checkEndGame/startTimer"

export function startGame() {
	addStartingStyles()
	showDevil()
	scaleDevil()
	startTimerCheckEndGame()
	startGameButton.setAttribute('disabled', true)
}