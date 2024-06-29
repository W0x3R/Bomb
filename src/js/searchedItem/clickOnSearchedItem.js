import { winGame } from "../gameResult/winGame"
import { controlGameSounds } from "../sounds/controlGameSounds"

const foundItemsBlock = document.querySelector('.found-items')
const pento = document.querySelectorAll('.found-items__pento')
let count = 0

export const clickOnSearchedItem = () => {
	controlGameSounds('searchedItem', 'play')
	pento[count].classList.add('found-items__pento_found')
	++count
	if (count === 5) {
		foundItemsBlock.classList.add('found-items__pento_shake')
	}
	if (count === 10) {
		winGame()
	}
}