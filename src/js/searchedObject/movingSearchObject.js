import { generateSearchObjectCoordinate } from "./generateSearchObjectCoordinate"
import { searchObjectSize } from "./setSearchObjectSize"
import { setSearchObjectSpeed } from "./setSearchItemSpeed"

export const searchedItem = document.querySelector('.searched-item')

export const movingSearchObject = () => {
	searchedItem.style.left = generateSearchObjectCoordinate(searchObjectSize, 'width') + 'px'
	searchedItem.style.bottom = generateSearchObjectCoordinate(searchObjectSize, 'height') + 'px'
}

export const movingSearchObjectWithInterval = () => {
	const getSpeedOfSearchItem = setSearchObjectSpeed()
	setInterval(movingSearchObject, getSpeedOfSearchItem)
} 