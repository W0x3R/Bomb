/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   englishLanguageIcon: function() { return /* binding */ englishLanguageIcon; },
/* harmony export */   rules: function() { return /* binding */ rules; },
/* harmony export */   rulesBlock: function() { return /* binding */ rulesBlock; },
/* harmony export */   rulesText: function() { return /* binding */ rulesText; },
/* harmony export */   rulesTextObject: function() { return /* binding */ rulesTextObject; },
/* harmony export */   russianLanguageIcon: function() { return /* binding */ russianLanguageIcon; },
/* harmony export */   showEnglishLanguageIcon: function() { return /* binding */ showEnglishLanguageIcon; },
/* harmony export */   showRussianLanguageIcon: function() { return /* binding */ showRussianLanguageIcon; }
/* harmony export */ });
const rules = document.querySelector('.rules')
const englishLanguageIcon = document.querySelector('.rules__inner_en')
const russianLanguageIcon = document.querySelector('.rules__inner_ru')
const rulesBlock = document.querySelector('.rules__inner')
const rulesText = document.querySelector('.rules__inner-text')

let rulesTextObject = {
	en: 'The world collapsed when the king of&nbsp;hell took over. Everyone who tried to&nbsp;stop him before you is&nbsp;dead. In&nbsp;order to&nbsp;end this once and for all, you need to&nbsp;click on&nbsp;the button above. After you click on&nbsp;it, the spell book will open and the summoning of&nbsp;the king of&nbsp;hell will begin. Remember that once you click, there is&nbsp;no&nbsp;going back. If&nbsp;you still dare to&nbsp;press, then you will need to&nbsp;catch 10&nbsp;pentagrams in&nbsp;order to&nbsp;put an&nbsp;end to&nbsp;this terrible creature once and for all. Be&nbsp;careful and persistent, the king of&nbsp;hell will try in&nbsp;every possible way to&nbsp;interfere with you, moving the pentagram to&nbsp;different parts of&nbsp;the screen.<br> Good luck.',

	ru: 'Мир рухнул, когда его захватил король ада. Все, кто пытался остановить его до&nbsp;тебя, мертвы. Для того чтобы покончить с&nbsp;этим раз и&nbsp;навсегда, нужно нажать на&nbsp;кнопку сверху. После того, как ты&nbsp;нажмешь на&nbsp;неё, откроется книга заклинаний, и&nbsp;начнется призыв короля ада. Помни, что после нажатия пути назад уже не&nbsp;будет. Если всё-таки осмелишься нажать, то&nbsp;тебе нужно будет словить 10&nbsp;пентаграмм, чтобы раз и&nbsp;навсегда покончить с&nbsp;этим ужасным существом. Будь внимателен и&nbsp;настойчив, король ада будет всячески пытаться помешать тебе, перемещая пентаграмму в&nbsp;разные части экрана. <br>Удачи.'
}

function showRussianLanguageIcon() {
	englishLanguageIcon.style.display = 'none'
	russianLanguageIcon.style.display = 'block'
	rulesText.innerHTML = rulesTextObject.ru
	localStorage.setItem('language', 'ru')
}

function showEnglishLanguageIcon() {
	russianLanguageIcon.style.display = 'none'
	englishLanguageIcon.style.display = 'block'
	rulesText.innerHTML = rulesTextObject.en
	localStorage.setItem('language', 'en')
}

 

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

const container = document.querySelector('.container')
const devil = document.querySelector('.devil')
let startWidthOfDevil
const startGameButton = document.querySelector('.play')
const resultDisplay = document.querySelector('.result-display')
const resultText = document.querySelector('.result-display__text')
const newGameButton = document.querySelector('.result-display__button')
const book = document.querySelector('.book')
const bookStar = document.querySelector('.book__star')
const bookEllipse = document.querySelector('.book__ellipse')
const foundItemsBlock = document.querySelector('.found-items')
const searchedItem = document.querySelector('.searched-item')
const pento = document.querySelectorAll('.found-items__pento')
const getSpeedOfSearchItem = setSpeedOfSearchItem()
const mainThemeSound = new Audio("main-sound.mp3")
let count = 0
let timer = 0
let timerCheckEndGame
let searchedItemSize
let timerScaleDevil

_rules_js__WEBPACK_IMPORTED_MODULE_0__.rulesBlock.addEventListener('click', function (e) {

	if (e.target.dataset.language === 'en') {
		new Audio('change-language-sound.mp3').play()
		_rules_js__WEBPACK_IMPORTED_MODULE_0__.showRussianLanguageIcon()
	}
	if (e.target.dataset.language === 'ru') {
		new Audio('change-language-sound.mp3').play()
		_rules_js__WEBPACK_IMPORTED_MODULE_0__.showEnglishLanguageIcon()
	}
})

function initGame() {
	if (localStorage.getItem('language') === 'en') {
		_rules_js__WEBPACK_IMPORTED_MODULE_0__.russianLanguageIcon.style.display = 'none'
		_rules_js__WEBPACK_IMPORTED_MODULE_0__.englishLanguageIcon.style.display = 'block'
		_rules_js__WEBPACK_IMPORTED_MODULE_0__.rulesText.innerHTML = _rules_js__WEBPACK_IMPORTED_MODULE_0__.rulesTextObject.en
	}
	else if (localStorage.getItem('language') === 'ru') {
		_rules_js__WEBPACK_IMPORTED_MODULE_0__.englishLanguageIcon.style.display = 'none'
		_rules_js__WEBPACK_IMPORTED_MODULE_0__.russianLanguageIcon.style.display = 'block'
		_rules_js__WEBPACK_IMPORTED_MODULE_0__.rulesText.innerHTML = _rules_js__WEBPACK_IMPORTED_MODULE_0__.rulesTextObject.ru
	}

	positioningBook()

	window.addEventListener('resize', function () {
		searchedItemSize = searchedItem.getBoundingClientRect().width
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
		return 2.2
	} else if (height < 702 && height >= 590) {
		return 1.9
	} else if (height < 590 && height >= 525) {
		return 1.6
	} else if (height < 525 && height >= 450) {
		return 1.3
	} else if (height < 450) {
		return 0.9
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

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function getSizeOfDisplay(value) {
	return (document.documentElement.getBoundingClientRect()[value]);
}

function getCenterOfDisplay(value) {
	return getSizeOfDisplay(value) / 2
}

function getSizeOfDevil(value) {
	return devil.getBoundingClientRect()[value];
}

function getSizeOfBook(value) {
	return book.getBoundingClientRect()[value];
}

function positioningBook() {
	book.style.left = getCenterOfDisplay('width') - getSizeOfBook('width') / 2 + 'px'
	book.style.bottom = getCenterOfDisplay('height') - getSizeOfBook('height') / 2 + 'px'
}

function playStartGameSounds() {
	new Audio("call-devil.mp3").play()
	new Audio("shake-book.mp3").play()
}

function startGame() {
	startGameButton.classList.add('play_active');
	book.classList.add('book_red')
	bookStar.classList.add('book__star_red');
	bookEllipse.classList.add('book__ellipse_red')
	_rules_js__WEBPACK_IMPORTED_MODULE_0__.rules.remove()
	playStartGameSounds()
}

function generateSearchedItemNum(min, value) {
	let max = Math.floor(getSizeOfDisplay([value]) - min);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function showDevil() {
	delay(8000).then(() => {
		searchedItem.style.display = 'inline-block';
		searchedItemSize = searchedItem.getBoundingClientRect().width
		searchedItem.style.left = generateSearchedItemNum(searchedItemSize, 'width') + 'px'
		searchedItem.style.bottom = generateSearchedItemNum(searchedItemSize, 'height') + 'px'
		book.classList.remove('book_red')
		book.classList.add('book_hide')
		devil.classList.add('devil_show')
		startWidthOfDevil = getSizeOfDevil('width')
		devil.style.left = getCenterOfDisplay('width') - getSizeOfDevil('width') / 2 + 'px'
		devil.style.bottom = getCenterOfDisplay('height') - getSizeOfDevil('height') / 2 + 'px'
		mainThemeSound.play()

		setInterval(() => {
			searchedItem.style.left = generateSearchedItemNum(searchedItemSize, 'width') + 'px'
			searchedItem.style.bottom = generateSearchedItemNum(searchedItemSize, 'height') + 'px'
		}, getSpeedOfSearchItem)
	})
}

searchedItem.addEventListener('click', function () {
	if (count < 10) {

		if (count === 4) {
			foundItemsBlock.classList.add('found-items__pento_shake')
		}

		new Audio('found-sound.mp3').play()
		pento[count].classList.add('found-items__pento_found')
		++count

	} if (count === 10) {
		mainThemeSound.pause()
		delay(1000).then(() => {
			this.remove()
			showResultDisplay('YOU SURVIVED', 'result-display_win', 'result-display__button_win')
			new Audio('win-sound.mp3').play()
		})
		clearInterval(timerCheckEndGame)
	}
})
function scaleDevil() {
	delay(9001).then(() => {
		timerScaleDevil = setInterval(() => {
			let scaleWidth = checkWidthIncreaseFactor()
			startWidthOfDevil += scaleWidth
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
	container.remove()
}

function loadGame() {
	startGame()
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
			new Audio('losing-sound.mp3').play()
		})
		delay(26000).then(() => {
			new Audio('losing-sound.mp3').play()
		})
		clearInterval(timerCheckEndGame);
	}
}

initGame()
}();
/******/ })()
;