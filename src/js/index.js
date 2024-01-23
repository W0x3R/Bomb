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
	en: 'Welcome to hell, traveler. Everyone who was here before you failed to cope with the king of hell. You are the last hope. Your goal is to collect 10 pentagrams in order to put an end to the king of hell once and for all. Good luck',
	ru: 'Добро пожаловать в ад,путник. Все кто тут был до тебя не справились с королем ада. Ты последняя надежда. Твоя цель собрать 10 пентаграмм для того чтобы раз и навсегда покончить с королем ада. Удачи.'
}
rulesBlock.addEventListener('click', function (e) {
	if (e.target.dataset.language === 'en') {
		englishLanguageIcon.style.display = 'none'
		russianLanguageIcon.style.display = 'block'
		rulesText.textContent = rulesTextObject.ru
	}
	if (e.target.dataset.language === 'ru') {
		russianLanguageIcon.style.display = 'none'
		englishLanguageIcon.style.display = 'block'
		rulesText.textContent = rulesTextObject.en
	}
})

function initGame() {
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
		return 840
	} else if (width < 1400 && width >= 1200) {
		return 820
	} else if (width < 1200 && width >= 1100) {
		return 800
	} else if (width < 1100 && width >= 1000) {
		return 770
	} else if (width < 1000 && width >= 850) {
		return 750
	} else if (width < 850) {
		return 710
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
	if (timer === 1) {
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