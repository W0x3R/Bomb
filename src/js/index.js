const devil = document.querySelector('.devil');
const playButton = document.querySelector('.play');
const deathBackground = document.querySelector('.death-display');
const newGameButton = document.querySelector('.death-display__button');
const book = document.querySelector('.book')
const bookStar = document.querySelector('.book__star')
const bookEllipse = document.querySelector('.book__ellipse')
let width = 110;

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function getCenterOfDisplay(value) {
	return (document.documentElement.getBoundingClientRect()[value] / 2);
}

function getHeightOfDevil() {
	return (devil.getBoundingClientRect().height);
}

function clickedDevilSound() {
	new Audio("devil-breath.mp3").play()
}

function startGame() {
	playButton.classList.add('play_active');
	book.classList.add('book_red')
	bookStar.classList.add('book__star_red');
	bookEllipse.classList.add('book__ellipse_red')
	new Audio("call-devil.mp3").play()
}

function showDevil() {
	delay(8000).then(() => {
		book.classList.remove('book_red')
		book.classList.add('book_hide')
		devil.classList.add('devil_show')
		devil.style.left = getCenterOfDisplay('width') - width / 2 + 'px'
		devil.style.bottom = getCenterOfDisplay('height') - getHeightOfDevil() / 2 + 'px'
		new Audio("main-sound.mp3").play()
	})
}

function scaleDevil() {
	delay(9001).then(() => {
		setInterval(() => {
			width += 1.8
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
