import { timerScaleDevil } from "./devil/scaleDevil"

const resultDisplay = document.querySelector('.result-display')
const resultText = document.querySelector('.result-display__text')
const newGameButton = document.querySelector('.result-display__button')
const gameContainer = document.querySelector('.container')

export const showResultDisplay = (value, classList, newGameStyle) => {
	resultDisplay.classList.add(classList)
	resultText.textContent = value
	clearInterval(timerScaleDevil)
	newGameButton.classList.add(newGameStyle)
	gameContainer.remove()
}