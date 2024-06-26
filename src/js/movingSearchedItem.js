import { generateSearchedItemNum, getSpeedOfSearchItem } from ".."
import { searchedItemSize } from "./setSearchedItemSize"
import { searchedItem } from "./showDevil"

export const movingSearchedItem = () => {
	setInterval(() => {
		searchedItem.style.left = generateSearchedItemNum(searchedItemSize, 'width') + 'px'
		searchedItem.style.bottom = generateSearchedItemNum(searchedItemSize, 'height') + 'px'
	}, getSpeedOfSearchItem)
}