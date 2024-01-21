const devil = document.querySelector('.devil');
const playButton = document.querySelector('.play');
const deathBackground = document.querySelector('.death-display');
const deathText = document.querySelector('.death-display__text')
const newGameButton = document.querySelector('.death-display__button');
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
		return 0.7
	} if (height >= 1000) {
		return 3.1
	} else if (height < 1000 && height >= 850) {
		return 2.6
	} else if (height < 850 && height >= 780) {
		return 2.3
	} else if (height < 780 && height >= 702) {
		return 2
	} else if (height < 702 && height >= 590) {
		return 1.7
	} else if (height < 590 && height >= 525) {
		return 1.4
	} else if (height < 525 && height >= 450) {
		return 1.1
	} else if (height < 450) {
		return 0.7
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
		if (count === 5) {
			new Audio('50-completed-sound.mp3').play()
		}
		new Audio('finded-sound.mp3').play()
		searchedItem.style.left = generateSearchedItemNumLeft() * 2
		searchedItem.style.bottom = generateSearchedItemNumBottom() * 2

		pento[count].classList.add('pento_finded')
		++count
	}
	if (count === 10) {
		showResultDisplay('YOU ALIVE', 'death-display_win')
		mainThemeSound.pause()
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

function showResultDisplay(value, classList) {
	deathBackground.classList.add(classList)
	devil.classList.remove('devil_show')
	deathText.textContent = value
	clearInterval(timerId)
}

function loadGame() {
	startGame()

	showDevil()

	scaleDevil()
}

devil.addEventListener('click', clickedDevilSound)

playButton.addEventListener('click', loadGame)

let timer = 0;

setInterval(() => {
	++timer
	if (timer === 58) {
		showResultDisplay('YOU DIED', 'death-display_loose')
	}
}, 1000)

newGameButton.addEventListener('click', function () {
	location.reload()
})