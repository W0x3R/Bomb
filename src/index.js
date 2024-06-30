import './style.scss'
import { startGameButton, addStartingStyles } from './js/addStartingStyles.js';
import { searchedItem, showDevil } from './js/devil/showDevil.js';
import { setStartWidthOfDevil, startWidthOfDevil } from './js/devil/setStartWidthOfDevil.js';
import { centeringElement, devil } from './js/sizesAndcentering/centeringElement.js';
import { getSizeOfElement } from './js/sizesAndcentering/getSizeOfElement.js';
import { clickEvents } from './js/eventHandlers/clickEvents.js';
import { callEvents } from './js/eventHandlers/callEvents.js';
import { setSearchObjectSize } from './js/searchedObject/setSearchObjectSize.js';
import { setRulesLanguage } from './js/setRulesLanguage.js';
import { delay } from './js/delay.js';
import { startTimerCheckEndGame } from './js/timerCheckEndGame.js';
import { clickOnSearchObject } from './js/searchedObject/clickOnSearchObject.js';
import { defeatGame } from './js/gameResult/defeatGame.js';
import { getScaleCoefficientOfDevil } from './js/devil/getScaleCoefficientOfDevil.js';
import { getCenterOfDisplay } from './js/sizesAndcentering/getCenterOfDisplay.js';

const resultDisplay = document.querySelector('.result-display')
const resultText = document.querySelector('.result-display__text')
const newGameButton = document.querySelector('.result-display__button')
export const book = document.querySelector('.book')
let timer = 0

let timerScaleDevil

window.addEventListener('click', (e) => callEvents(e, clickEvents))

window.addEventListener('resize', () => {
	setSearchObjectSize()
	centeringElement(book)
})

centeringElement(book)

searchedItem.addEventListener('click', clickOnSearchObject)

function scaleDevil() {
	delay(9001).then(() => {
		timerScaleDevil = setInterval(() => {
			let scaleWidth = getScaleCoefficientOfDevil()
			setStartWidthOfDevil(startWidthOfDevil + scaleWidth)
			devil.style.width = startWidthOfDevil + 'px'
			devil.style.left = getCenterOfDisplay('width') - startWidthOfDevil / 2 + 'px'
			devil.style.bottom = getCenterOfDisplay('height') - getSizeOfElement(devil, 'height') / 2 + 'px'
		}, 200);
	})
}

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