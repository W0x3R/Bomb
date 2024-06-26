import { getSpeedOfSearchItem } from ".."
import { generateSearcheedItemCoordinate } from "./generateSearcheedItemCoordinate"
import { searchedItemSize } from "./setSearchedItemSize"
import { searchedItem } from "./showDevil"

export const movingSearchedItem = () => {
	setInterval(() => {
		searchedItem.style.left = generateSearcheedItemCoordinate(searchedItemSize, 'width') + 'px'
		searchedItem.style.bottom = generateSearcheedItemCoordinate(searchedItemSize, 'height') + 'px'
	}, getSpeedOfSearchItem)
}