import { searchedItem } from "../devil/showDevil"
import { generateSearchObjectCoordinate } from "./generateSearchObjectCoordinate"
import { searchObjectSize } from "./setSearchObjectSize"
import { setSearchObjectSpeed } from "./setSearchItemSpeed"

export const movingSearchObject = () => {
	const getSpeedOfSearchItem = setSearchObjectSpeed()
	setInterval(() => {
		searchedItem.style.left = generateSearchObjectCoordinate(searchObjectSize, 'width') + 'px'
		searchedItem.style.bottom = generateSearchObjectCoordinate(searchObjectSize, 'height') + 'px'
	}, getSpeedOfSearchItem)
}