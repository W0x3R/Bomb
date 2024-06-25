import './style.scss'
import { startGameButton, addStartingStyles } from './js/addStartingStyles.js';
import { controlGameSounds } from './js/controlGameSounds.js';
import { searchedItem, devil, showDevil } from './js/showDevil.js';
import * as rulesTextModule from './js/rules.js';
import { setSearchedItemSize } from './js/setSearchedItemSize.js';
import { setStartWidthOfDevil, startWidthOfDevil } from './js/setStartWidthOfDevil.js';

const resultDisplay = document.querySelector('.result-display')
const resultText = document.querySelector('.result-display__text')
const newGameButton = document.querySelector('.result-display__button')
export const book = document.querySelector('.book')

const foundItemsBlock = document.querySelector('.found-items')

const pento = document.querySelectorAll('.found-items__pento')

export const getSpeedOfSearchItem = setSpeedOfSearchItem()
let count = 0
let timer = 0
let timerCheckEndGame

let timerScaleDevil

rulesTextModule.rulesBlock.addEventListener('click', function (e) {
	if (e.target.dataset.language === 'en') {
		rulesTextModule.showRussianLanguageIcon()
	}
	if (e.target.dataset.language === 'ru') {
		rulesTextModule.showEnglishLanguageIcon()
	}
	controlGameSounds('changeLanguage', 'play')
})

function initGame() {
	if (localStorage.getItem('language') === 'en') {
		rulesTextModule.russianLanguageIcon.style.display = 'none'
		rulesTextModule.englishLanguageIcon.style.display = 'block'
		rulesTextModule.rulesText.innerHTML = rulesTextModule.rulesTextObject.en
	}
	else if (localStorage.getItem('language') === 'ru') {
		rulesTextModule.englishLanguageIcon.style.display = 'none'
		rulesTextModule.russianLanguageIcon.style.display = 'block'
		rulesTextModule.rulesText.innerHTML = rulesTextModule.rulesTextObject.ru
	}

	positioningBook()

	window.addEventListener('resize', function () {
		setSearchedItemSize()
		positioningBook()
	})

	startGameButton.addEventListener('click', loadGame)

	newGameButton.addEventListener('click', function () {
		location.reload()
	})
}

function checkWidthIncreaseFactor() {
	const height = getSizeOfDisplay('height');
	const width = getSizeOfDisplay('width');

	if (width <= 560) {
		return 1.3
	} if (height >= 1000) {
		return 3.3
	} else if (height < 1000 && height >= 850) {
		return 2.8
	} else if (height < 850 && height >= 780) {
		return 2.5
	} else if (height < 780 && height >= 702) {
		return 2.25
	} else if (height < 702 && height >= 590) {
		return 1.95
	} else if (height < 590 && height >= 525) {
		return 1.65
	} else if (height < 525 && height >= 450) {
		return 1.35
	} else if (height < 450) {
		return 1
	}
}

function setSpeedOfSearchItem() {
	const width = getSizeOfDisplay('width');
	if (width >= 1400) {
		return 790
	} else if (width < 1400 && width >= 1200) {
		return 810
	} else if (width < 1200 && width >= 1100) {
		return 790
	} else if (width < 1100 && width >= 1000) {
		return 770
	} else if (width < 1000 && width >= 850) {
		return 760
	} else if (width < 850) {
		return 650
	}
}

export function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function getSizeOfDisplay(value) {
	return (document.documentElement.getBoundingClientRect()[value]);
}

export function getCenterOfDisplay(value) {
	return getSizeOfDisplay(value) / 2
}

export function getSizeOfDevil(value) {
	return devil.getBoundingClientRect()[value];
}

function getSizeOfBook(value) {
	return book.getBoundingClientRect()[value];
}

function positioningBook() {
	book.style.left = getCenterOfDisplay('width') - getSizeOfBook('width') / 2 + 'px'
	book.style.bottom = getCenterOfDisplay('height') - getSizeOfBook('height') / 2 + 'px'
}

export function generateSearchedItemNum(min, value) {
	let max = Math.floor(getSizeOfDisplay([value]) - min);
	return Math.floor(Math.random() * (max - min + 1) + min);
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
			let scaleWidth = checkWidthIncreaseFactor()
			setStartWidthOfDevil(startWidthOfDevil + scaleWidth)
			devil.style.width = startWidthOfDevil + 'px'
			devil.style.left = getCenterOfDisplay('width') - startWidthOfDevil / 2 + 'px'
			devil.style.bottom = getCenterOfDisplay('height') - getSizeOfDevil('height') / 2 + 'px'
		}, 200);
	})
}

function showResultDisplay(value, classList, newGameStyle) {
	resultDisplay.classList.add(classList)
	resultText.textContent = value
	clearInterval(timerScaleDevil)
	newGameButton.classList.add(newGameStyle)
}

function loadGame() {
	addStartingStyles()
	showDevil()
	scaleDevil()

	timerCheckEndGame = setInterval(checkEndOfGame, 1000)
	startGameButton.removeEventListener('click', loadGame);
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