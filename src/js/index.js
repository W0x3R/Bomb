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
const questionsBlock = document.querySelector('.questions')
const searchedItem = document.querySelector('.pento')
const pento = document.querySelectorAll('.questions__pento')
const getSpeedOfSearchItem = setSpeedOfSearchItem()
const mainThemeSound = new Audio("main-sound.mp3")
const rules = document.querySelector('.rules')
const rulesBlock = document.querySelector('.rules__inner')
const rulesText = document.querySelector('.rules__inner-text')
const englishLanguageIcon = document.querySelector('.rules__inner_en')
const russianLanguageIcon = document.querySelector('.rules__inner_ru')
let count = 0
let timer = 0
let timerCheckEndGame
let searchedItemSize
let timerScaleDevil

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

rulesBlock.addEventListener('click', function (e) {
	new Audio('change-language-sound.mp3').play()
	if (e.target.dataset.language === 'en') {
		showRussianLanguageIcon()
	}
	if (e.target.dataset.language === 'ru') {
		showEnglishLanguageIcon()
	}
})

function initGame() {
	if (localStorage.getItem('language') === 'en') {
		russianLanguageIcon.style.display = 'none'
		englishLanguageIcon.style.display = 'block'
		rulesText.innerHTML = rulesTextObject.en
	}
	else if (localStorage.getItem('language') === 'ru') {
		englishLanguageIcon.style.display = 'none'
		russianLanguageIcon.style.display = 'block'
		rulesText.innerHTML = rulesTextObject.ru
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
		return 780
	} else if (width < 1400 && width >= 1200) {
		return 800
	} else if (width < 1200 && width >= 1100) {
		return 780
	} else if (width < 1100 && width >= 1000) {
		return 760
	} else if (width < 1000 && width >= 850) {
		return 750
	} else if (width < 850) {
		return 650
	}
}

console.log(getSpeedOfSearchItem);

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
	rules.remove()
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
		searchedItem.style.left = generateSearchedItemNum(searchedItemSize, 'width')
		searchedItem.style.bottom = generateSearchedItemNum(searchedItemSize, 'height')
		book.classList.remove('book_red')
		book.classList.add('book_hide')
		devil.classList.add('devil_show')
		startWidthOfDevil = getSizeOfDevil('width')
		devil.style.left = getCenterOfDisplay('width') - getSizeOfDevil('width') / 2 + 'px'
		devil.style.bottom = getCenterOfDisplay('height') - getSizeOfDevil('height') / 2 + 'px'
		mainThemeSound.play()

		setInterval(() => {
			searchedItem.style.left = generateSearchedItemNum(searchedItemSize, 'width')
			searchedItem.style.bottom = generateSearchedItemNum(searchedItemSize, 'height')
		}, getSpeedOfSearchItem)
	})
}

searchedItem.addEventListener('click', function (e) {
	if (count < 10) {

		if (count === 4) {
			questionsBlock.classList.add('questions__pento_shake')
		}

		new Audio('found-sound.mp3').play()
		pento[count].classList.add('questions__pento_found')
		++count

	} if (count === 10) {
		showResultDisplay('YOU SURVIVED', 'result-display_win', 'result-display__button_win')
		mainThemeSound.pause()
		this.remove()
		delay(1000).then(() => {
			new Audio('win-sound.mp3').play()
		})
		clearInterval(timerCheckEndGame)
	}
})

function scaleDevil() {
	delay(9001).then(() => {
		timerScaleDevil = setInterval(() => {
			let scaleWidth = checkWidthIncreaseFactor()
			console.log(scaleWidth);
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
		showResultDisplay('YOU DIED', 'result-display_loose', 'result-display__button_loose')
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