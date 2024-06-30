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
import { scaleDevil, timerScaleDevil } from './js/devil/scaleDevil.js';

const resultDisplay = document.querySelector('.result-display')
const resultText = document.querySelector('.result-display__text')
const newGameButton = document.querySelector('.result-display__button')
export const book = document.querySelector('.book')
let timer = 0

window.addEventListener('click', (e) => callEvents(e, clickEvents))

window.addEventListener('resize', () => {
	setSearchObjectSize()
	centeringElement(book)
})

centeringElement(book)

export function showResultDisplay(value, classList, newGameStyle) {
	resultDisplay.classList.add(classList)
	resultText.textContent = value
	clearInterval(timerScaleDevil)
	newGameButton.classList.add(newGameStyle)
}

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