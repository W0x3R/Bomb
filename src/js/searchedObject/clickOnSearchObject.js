import foundSearchedItem from '../../sounds/foundSearchedItem.mp3'
import { winGame } from "../gameResult/winGame"
import { constructClickSound } from '../sounds/constructClickSound'

export const foundObjectsBlock = document.querySelector('.found-items')
const pento = document.querySelectorAll('.found-items__pento')
let count = 0

export const clickOnSearchObject = () => {
	constructClickSound(foundSearchedItem)
	pento[count].classList.add('found-items__pento_found')
	++count
	if (count === 5) {
		foundObjectsBlock.classList.add('found-items__pento_shake')
	}
	if (count === 1) {
		winGame()
	}
}