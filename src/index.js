import './style.scss'
import { startGameButton, addStartingStyles } from './js/addStartingStyles.js';
import { showDevil } from './js/devil/showDevil.js';
import { centeringElement } from './js/sizesAndcentering/centeringElement.js';
import { clickEvents } from './js/eventHandlers/clickEvents.js';
import { callEvents } from './js/eventHandlers/callEvents.js';
import { setSearchObjectSize } from './js/searchedObject/setSearchObjectSize.js';
import { setRulesLanguage } from './js/setRulesLanguage.js';
import { startTimerCheckEndGame } from './js/timerCheckEndGame.js';
import { defeatGame } from './js/gameResult/defeatGame.js';
import { scaleDevil } from './js/devil/scaleDevil.js';

export const book = document.querySelector('.book')
let timer = 0

window.addEventListener('click', (e) => callEvents(e, clickEvents))

window.addEventListener('resize', () => {
	setSearchObjectSize()
	centeringElement(book)
})

centeringElement(book)

export function loadGame() {
	addStartingStyles()
	showDevil()
	scaleDevil()

	startTimerCheckEndGame()
	startGameButton.setAttribute('disabled', true)
}

export function checkEndOfGame() {
	timer < 56 ? ++timer : defeatGame()
}

setRulesLanguage()