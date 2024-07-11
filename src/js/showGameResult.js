import { timerScaleDevil } from "./devil/scaleDevil"
import { foundObjectsBlock } from "./searchedObject/clickOnSearchObject"

const resultDisplay = document.querySelector('.result')
const resultText = document.querySelector('.result__text')
const newGameButton = document.querySelector('.result__button')
const devilPictureBlock = document.querySelector('.devil__picture')

export const showGameResult = (value, classList, newGameStyle) => {
	resultDisplay.classList.add(classList)
	resultText.textContent = value
	clearInterval(timerScaleDevil)
	newGameButton.classList.add(newGameStyle)
	devilPictureBlock.remove()
	foundObjectsBlock.remove()
}