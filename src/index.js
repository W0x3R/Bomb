import './style.scss'
import { startGameButton, addStartingStyles } from './js/addStartingStyles.js';
import { searchedItem, showDevil } from './js/showDevil.js';
import { setSearchedItemSize } from './js/setSearchedItemSize.js';
import { setStartWidthOfDevil, startWidthOfDevil } from './js/setStartWidthOfDevil.js';
import { centeringItems, devil } from './js/centeringItems.js';
import { getSizeOfItem } from './js/getSizeOfItem.js';
import { controlGameSounds } from './js/sounds/controlGameSounds.js';
import { getScaleCoefficientOfDevil } from './js/getScaleCoefficientOfDevil.js';
import { clickEvents } from './js/eventHandlers/clickEvents.js';
import { callEvents } from './js/eventHandlers/callEvents.js';
import { getStorageLanguage } from './js/languageStorage.js';
import { changeRulesLanguage } from './js/rules.js';

const resultDisplay = document.querySelector('.result-display')
const resultText = document.querySelector('.result-display__text')
const newGameButton = document.querySelector('.result-display__button')
export const book = document.querySelector('.book')

const foundItemsBlock = document.querySelector('.found-items')

const pento = document.querySelectorAll('.found-items__pento')

let count = 0
let timer = 0
let timerCheckEndGame
let timerScaleDevil

window.addEventListener('click', (e) => callEvents(e, clickEvents))

window.addEventListener('resize', () => {
	setSearchedItemSize()
	centeringItems(book)
})


function initGame() {
	const currentLanguage = getStorageLanguage()
	currentLanguage === 'en' ? changeRulesLanguage('block', 'none', 'en') : changeRulesLanguage('none', 'block', 'ru')
}
centeringItems(book)

export function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function getCenterOfDisplay(value) {
	return getSizeOfItem(document.documentElement, value) / 2
}

searchedItem.addEventListener('click', function () {
	if (count < 10) {

		if (count === 4) {
			foundItemsBlock.classList.add('found-items__pento_shake')
		}
		controlGameSounds('searchedItem', 'play')
		pento[count].classList.add('found-items__pento_found')
		++count

	} if (count === 10) {
		controlGameSounds('mainSound', 'pause')
		this.remove()
		delay(1000).then(() => {
			showResultDisplay('YOU SURVIVED', 'result-display_win', 'result-display__button_win')
			controlGameSounds('win', 'play')
		})
		clearInterval(timerCheckEndGame)
	}
})
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

function showResultDisplay(value, classList, newGameStyle) {
	resultDisplay.classList.add(classList)
	resultText.textContent = value
	clearInterval(timerScaleDevil)
	newGameButton.classList.add(newGameStyle)
}

export function loadGame() {
	addStartingStyles()
	showDevil()
	scaleDevil()

	timerCheckEndGame = setInterval(checkEndOfGame, 1000)
	startGameButton.setAttribute('disabled', true)
}

function checkEndOfGame() {
	++timer
	if (timer === 56) {
		showResultDisplay('YOU DIED', 'result-display_defeat', 'result-display__button_defeat')
		searchedItem.remove()
		delay(8000).then(() => {
			controlGameSounds('defeat', 'play')
		})
		delay(26000).then(() => {
			controlGameSounds('defeatSecond', 'play')
		})
		clearInterval(timerCheckEndGame);
	}
}

initGame()