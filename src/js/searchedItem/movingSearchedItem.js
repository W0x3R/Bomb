import { searchedItem } from "../devil/showDevil"
import { generateSearcheedItemCoordinate } from "./generateSearcheedItemCoordinate"
import { searchedItemSize } from "./setSearchedItemSize"
import { setSearchItemSpeed } from "./setSearchItemSpeed"

export const movingSearchedItem = () => {
	const getSpeedOfSearchItem = setSearchItemSpeed()
	setInterval(() => {
		searchedItem.style.left = generateSearcheedItemCoordinate(searchedItemSize, 'width') + 'px'
		searchedItem.style.bottom = generateSearcheedItemCoordinate(searchedItemSize, 'height') + 'px'
	}, getSpeedOfSearchItem)
}