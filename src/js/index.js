const devil = document.querySelector('.devil');
const playButton = document.querySelector('.play');
const deathBackground = document.querySelector('.result-display');
const deathText = document.querySelector('.result-display__text')
const newGameButton = document.querySelector('.result-display__button');
const book = document.querySelector('.book');
const bookStar = document.querySelector('.book__star');
const bookEllipse = document.querySelector('.book__ellipse');
const questionsBlock = document.querySelector('.questions');
const searchedItem = document.querySelector('.pento');
const pento = document.querySelectorAll('.questions__pento');

let width = 110;

function checkWidthIncreaseFactor() {
	const height = getSizeOfDisplay('height');
	const width = getSizeOfDisplay('width');

	if (width <= 560) {
		return 0.8
	} if (height >= 1000) {
		return 3.2
	} else if (height < 1000 && height >= 850) {
		return 2.7
	} else if (height < 850 && height >= 780) {
		return 2.4
	} else if (height < 780 && height >= 702) {
		return 2.1
	} else if (height < 702 && height >= 590) {
		return 1.8
	} else if (height < 590 && height >= 525) {
		return 1.5
	} else if (height < 525 && height >= 450) {
		return 1.2
	} else if (height < 450) {
		return 0.8
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

function getHeightOfDevil() {
	return (devil.getBoundingClientRect().width);
}

function getSizeOfBook(value) {
	return book.getBoundingClientRect()[value];
}

function positioningBook() {
	book.style.left = getCenterOfDisplay('width') - getSizeOfBook('width') / 2 + 'px'
	book.style.bottom = getCenterOfDisplay('height') - getSizeOfBook('height') / 2 + 'px'
}
positioningBook()

function positioningDevil() {
	devil.style.left = getCenterOfDisplay('width') - width / 2 + 'px'
	devil.style.bottom = getCenterOfDisplay('height') - getHeightOfDevil() / 2 + 'px'
}

window.addEventListener('resize', function () {
	positioningBook()
})

function clickedDevilSound() {
	new Audio("devil-breath.mp3").play()
}

function startGame() {
	playButton.classList.add('play_active');
	book.classList.add('book_red')
	bookStar.classList.add('book__star_red');
	bookEllipse.classList.add('book__ellipse_red')
	new Audio("call-devil.mp3").play()
	new Audio("shake-book.mp3").play()
}

function generateSearchedItemNumLeft() {
	let min = 25;
	let max = Math.floor(getCenterOfDisplay('width') - 25);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateSearchedItemNumBottom() {
	let min = 25;
	let max = Math.floor(getCenterOfDisplay('height') - 25);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const mainThemeSound = new Audio("main-sound.mp3")

function showDevil() {
	delay(8000).then(() => {
		searchedItem.style.display = 'inline-block';
		searchedItem.style.left = generateSearchedItemNumLeft() * 2
		searchedItem.style.bottom = generateSearchedItemNumBottom() * 2
		book.classList.remove('book_red')
		book.classList.add('book_hide')
		devil.classList.add('devil_show')
		devil.style.left = getCenterOfDisplay('width') - width / 2 + 'px'
		devil.style.bottom = getCenterOfDisplay('height') - getHeightOfDevil() / 2 + 'px'
		mainThemeSound.play()
	})
}

let count = 0;

searchedItem.addEventListener('click', function (e) {

	if (count < 10) {
		if (count === 4) {
			delay(1000).then(() => {
				questionsBlock.classList.add('questions__pento_shake')
			})

		}
		new Audio('finded-sound.mp3').play()
		searchedItem.classList.add('pento_hide')
		delay(1000).then(() => {
			searchedItem.classList.remove('pento_hide')
			searchedItem.style.left = generateSearchedItemNumLeft() * 2
			searchedItem.style.bottom = generateSearchedItemNumBottom() * 2

			pento[count].classList.add('questions__pento_found')
			++count
		})


	}
	if (count === 9) {
		showResultDisplay('YOU SURVIVED', 'result-display_win', 'result-display__button_win')
		mainThemeSound.pause()
		searchedItem.remove()
		delay(1000).then(() => {
			new Audio('win-sound.mp3').play()
		})
		clearInterval(timerIdEnd)
	}
})

let timerId;

function scaleDevil() {
	delay(9001).then(() => {
		timerId = setInterval(() => {
			let scaleWidth = checkWidthIncreaseFactor()
			width += scaleWidth
			devil.style.width = width + 'px'
			devil.style.left = getCenterOfDisplay('width') - width / 2 + 'px'
			devil.style.bottom = getCenterOfDisplay('height') - getHeightOfDevil() / 2 + 'px'
		}, 200);
	})
}

function showResultDisplay(value, classList, newGameStyle) {
	deathBackground.classList.add(classList)
	devil.classList.remove('devil_show')
	deathText.textContent = value
	clearInterval(timerId)
	newGameButton.classList.add(newGameStyle)
}

let timer = 0;

let timerIdEnd;

function loadGame() {
	startGame()

	showDevil()

	scaleDevil()



	timerIdEnd = setInterval(() => {
		++timer
		if (timer === 57) {
			showResultDisplay('YOU DIED', 'result-display_loose', 'result-display__button_loose')
			searchedItem.remove()
		}
	}, 1000)
	playButton.removeEventListener('click', loadGame);
}

devil.addEventListener('click', clickedDevilSound)

playButton.addEventListener('click', loadGame)



newGameButton.addEventListener('click', function () {
	location.reload()
})