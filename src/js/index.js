const devil = document.querySelector('.devil');
const playButton = document.querySelector('.play');
const deathBackground = document.querySelector('.death-display');
const newGameButton = document.querySelector('.death-display__button');
const book = document.querySelector('.book');
const bookStar = document.querySelector('.book__star');
const bookEllipse = document.querySelector('.book__ellipse');
const questionsBlock = document.querySelector('.questions');
const pento = document.querySelector('.pento')


let width = 110;


function ret() {
	if (document.documentElement.getBoundingClientRect().width <= 560) {
		return 0.8
	}
	if (document.documentElement.getBoundingClientRect().height >= 1000) {
		return 3.2
	}
	else if (document.documentElement.getBoundingClientRect().height < 1000 && document.documentElement.getBoundingClientRect().height >= 850) {
		return 2.7
	}
	else if (document.documentElement.getBoundingClientRect().height < 850 && document.documentElement.getBoundingClientRect().height >= 780) {
		return 2.4
	}
	else if (document.documentElement.getBoundingClientRect().height < 780 && document.documentElement.getBoundingClientRect().height >= 702) {
		return 2.1
	}
	else if (document.documentElement.getBoundingClientRect().height < 702 && document.documentElement.getBoundingClientRect().height >= 590) {
		return 1.8
	}
	else if (document.documentElement.getBoundingClientRect().height < 590 && document.documentElement.getBoundingClientRect().height >= 525) {
		return 1.5
	}
	else if (document.documentElement.getBoundingClientRect().height < 525 && document.documentElement.getBoundingClientRect().height >= 450) {
		return 1.2
	}
	else if (document.documentElement.getBoundingClientRect().height < 450) {
		return 0.8
	}
}

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function getCenterOfDisplay(value) {
	return (document.documentElement.getBoundingClientRect()[value] / 2);
}

function getHeightOfDevil() {
	return (devil.getBoundingClientRect().width);
}

function positioningBook() {
	book.style.left = getCenterOfDisplay('width') - book.getBoundingClientRect().width / 2 + 'px'
	book.style.bottom = getCenterOfDisplay('height') - book.getBoundingClientRect().height / 2 + 'px'
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

function generateRandomPositionOfPentoLeft() {
	let min = 25;
	let max = Math.floor(getCenterOfDisplay('width') - 25);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomPositionOfPentoBottom() {
	let min = 25;
	let max = Math.floor(getCenterOfDisplay('height') - 25);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function showDevil() {
	delay(8000).then(() => {
		pento.style.display = 'inline-block';
		pento.style.left = generateRandomPositionOfPentoLeft() * 2
		pento.style.bottom = generateRandomPositionOfPentoBottom() * 2
		book.classList.remove('book_red')
		book.classList.add('book_hide')
		devil.classList.add('devil_show')
		devil.style.left = getCenterOfDisplay('width') - width / 2 + 'px'
		devil.style.bottom = getCenterOfDisplay('height') - getHeightOfDevil() / 2 + 'px'
		new Audio("main-sound.mp3").play()
	})
}

pento.addEventListener('click', function (e) {
	pento.style.left = generateRandomPositionOfPentoLeft() * 2
	pento.style.bottom = generateRandomPositionOfPentoBottom() * 2
})

function scaleDevil() {
	delay(9001).then(() => {
		setInterval(() => {
			let scaleWidth = ret()
			console.log(scaleWidth);
			width += scaleWidth
			devil.style.width = width + 'px'
			devil.style.left = getCenterOfDisplay('width') - width / 2 + 'px'
			devil.style.bottom = getCenterOfDisplay('height') - getHeightOfDevil() / 2 + 'px'
		}, 200);
	})
}

function playScaredSounds() {
	delay(12000).then(() => {
		new Audio("laugh-sound.mp3").play()
	})
	delay(15000).then(() => {
		new Audio("scare-sound-one.mp3").play()
	})
	delay(21000).then(() => {
		new Audio("scare-sound-two.mp3").play()
	})
	delay(35000).then(() => {
		new Audio("scare-sound-four.mp3").play()
	})
	delay(42000).then(() => {
		new Audio("scare-sound-three.mp3").play()
		new Audio("timer-sound.mp3").play()
	})

	delay(54000).then(() => {
		new Audio("die-sound.mp3").play()
	})
}

function showDeathDisplay() {
	delay(57000).then(() => {
		new Audio("final-laugh-sound.mp3").play()
		deathBackground.classList.add('death-display_show')
		devil.classList.remove('devil_show')
	})
}

function loadGame() {
	startGame()

	showDevil()

	scaleDevil()

	playScaredSounds()

	showDeathDisplay()
}

devil.addEventListener('click', clickedDevilSound)

playButton.addEventListener('click', loadGame)
