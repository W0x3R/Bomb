import { winGame } from "../gameResult/winGame"
import { controlGameSounds } from "../sounds/controlGameSounds"

const foundObjectsBlock = document.querySelector('.found-items')
const pento = document.querySelectorAll('.found-items__pento')
let count = 0

export const clickOnSearchObject = () => {
	controlGameSounds('searchedItem', 'play')
	pento[count].classList.add('found-items__pento_found')
	++count
	if (count === 5) {
		foundObjectsBlock.classList.add('found-items__pento_shake')
	}
	if (count === 10) {
		winGame()
	}
}