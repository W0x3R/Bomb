import { generateSearchObjectCoordinate } from "./generateSearchObjectCoordinate"
import { searchObjectSize } from "./setSearchObjectSize"

export const searchObject = document.querySelector('.search-object')

export const movingSearchObject = () => {
	searchObject.style.left = generateSearchObjectCoordinate(searchObjectSize, 'width') + 'px'
	searchObject.style.bottom = generateSearchObjectCoordinate(searchObjectSize, 'height') + 'px'
}