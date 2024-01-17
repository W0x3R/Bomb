const devil = document.querySelector('.devil');
const playButton = document.querySelector('.play');
let width = 110;

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function getCenterOfWidth() {
	return (document.documentElement.getBoundingClientRect().width / 2);
}

function getCenterOfHeight() {
	return (document.documentElement.getBoundingClientRect().height / 2);
}

function getHeightOfDevil() {
	return (devil.getBoundingClientRect().height);
}

function clickedDevil() {
	new Audio("devil-breath.mp3").play()
}

function callDevil() {
	new Audio("call-devil.mp3").play()
}

function playScareSoundOne() {
	new Audio("scare-sound-one.mp3").play()
}

function playScareSoundTwo() {
	new Audio("scare-sound-two.mp3").play()
}

function playScareSoundThree() {
	new Audio("scare-sound-three.mp3").play()
}

function playLaughSound() {
	new Audio('demonic-laugh.mp3').play()
}

function playTimerSound() {
	new Audio('timer-sound.mp3').play()
}

function dieSound() {
	new Audio('die-sound.mp3').play()
}

function finalSound() {
	new Audio('final-laugh-sound.mp3').play()
}

devil.addEventListener('click', clickedDevil)

playButton.addEventListener('click', function () {
	this.classList.add('play__active')
	callDevil()
	delay(9000).then(() => {
		devil.classList.add('devil_appear')
		playScareSoundOne()
	})
	delay(9100).then(() => {
		setInterval(() => {
			width += 1
			devil.style.width = width + 'px'
			devil.style.left = getCenterOfWidth() - width / 2 + 'px'
			devil.style.bottom = getCenterOfHeight() - getHeightOfDevil() / 2 + 'px'
		}, 200);
	})
	delay(14000).then(() => {
		playScareSoundTwo()
		playLaughSound()
	})
	delay(20000).then(() => {
		playLaughSound()
	})

	delay(26000).then(() => {
		playTimerSound()
		playScareSoundThree()
	})

	delay(37000).then(() => {
		finalSound()
	})

	delay(45000).then(() => {
		dieSound()
	})

})