import { addStartingStyles, book, startGameButton } from "./addStartingStyles"
import { scaleDevil } from "./devil/scaleDevil"
import { showDevil } from "./devil/showDevil"
import { centeringElement } from "./sizesAndcentering/centeringElement"
import { startTimerCheckEndGame } from "./checkEndGame/startTimer"

export function startGame() {
	addStartingStyles()
	centeringElement(book)
	showDevil()
	scaleDevil()
	startTimerCheckEndGame()
	startGameButton.setAttribute('disabled', true)
}