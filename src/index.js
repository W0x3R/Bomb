import './style.scss'
import { startGameButton, addStartingStyles } from './js/addStartingStyles.js';
import { searchedItem, showDevil } from './js/showDevil.js';
import { setStartWidthOfDevil, startWidthOfDevil } from './js/setStartWidthOfDevil.js';
import { centeringItems, devil } from './js/centeringItems.js';
import { getSizeOfItem } from './js/getSizeOfItem.js';
import { getScaleCoefficientOfDevil } from './js/getScaleCoefficientOfDevil.js';
import { clickEvents } from './js/eventHandlers/clickEvents.js';
import { callEvents } from './js/eventHandlers/callEvents.js';
import { setSearchedItemSize } from './js/searchedItem/setSearchedItemSize.js';
import { setRulesLanguage } from './js/setRulesLanguage.js';
import { delay } from './js/delay.js';
import { startTimerCheckEndGame } from './js/timerCheckEndGame.js';
import { clickOnSearchedItem } from './js/searchedItem/clickOnSearchedItem.js';
import { defeatGame } from './js/defeatGame.js';

const resultDisplay = document.querySelector('.result-display')
const resultText = document.querySelector('.result-display__text')
const newGameButton = document.querySelector('.result-display__button')
export const book = document.querySelector('.book')
let timer = 0

let timerScaleDevil

window.addEventListener('click', (e) => callEvents(e, clickEvents))

window.addEventListener('resize', () => {
	setSearchedItemSize()
	centeringItems(book)
})

centeringItems(book)

export function getCenterOfDisplay(value) {
	return getSizeOfItem(document.documentElement, value) / 2
}

searchedItem.addEventListener('click', clickOnSearchedItem)

function scaleDevil() {
	delay(9001).then(() => {
		timerScaleDevil = setInterval(() => {
			let scaleWidth = getScaleCoefficientOfDevil()
			setStartWidthOfDevil(startWidthOfDevil + scaleWidth)
			devil.style.width = startWidthOfDevil + 'px'
			devil.style.left = getCenterOfDisplay('width') - startWidthOfDevil / 2 + 'px'
			devil.style.bottom = getCenterOfDisplay('height') - getSizeOfItem(devil, 'height') / 2 + 'px'
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