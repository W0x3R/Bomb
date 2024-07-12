import { addStartingStyles, startGameButton } from "./addStartingStyles"
import { scaleDevil } from "../devil/scaleDevil"
import { showDevil } from "../devil/showDevil"
import { startTimerCheckEndGame } from "../checkEndGame/startTimer"
import { movingSearchObject } from "../searchedObject/movingSearchObject"
import { setSearchObjectSize } from "../searchedObject/setSearchObjectSize"

export const startGame = () => {
	setSearchObjectSize()
	addStartingStyles()
	movingSearchObject()
	showDevil()
	scaleDevil()
	startTimerCheckEndGame()
	startGameButton.setAttribute('disabled', true)
}