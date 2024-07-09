import { timerScaleDevil } from "./devil/scaleDevil"

const resultDisplay = document.querySelector('.result')
const resultText = document.querySelector('.result__text')
const newGameButton = document.querySelector('.result__button')
const gameContainer = document.querySelector('.container')

export const showGameResult = (value, classList, newGameStyle) => {
	resultDisplay.classList.add(classList)
	resultText.textContent = value
	clearInterval(timerScaleDevil)
	newGameButton.classList.add(newGameStyle)
	gameContainer.remove()
}