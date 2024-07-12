import { generateSearchObjectCoordinate } from "./generateSearchObjectCoordinate"
import { searchObjectSize } from "./setSearchObjectSize"

export const searchedItem = document.querySelector('.searched-item')

export const movingSearchObject = () => {
	searchedItem.style.left = generateSearchObjectCoordinate(searchObjectSize, 'width') + 'px'
	searchedItem.style.bottom = generateSearchObjectCoordinate(searchObjectSize, 'height') + 'px'
}