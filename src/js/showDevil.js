import { delay, generateSearchedItemNum, getSpeedOfSearchItem } from "..";
import { addShowDevilStyles } from "./addShowDevilStyles";
import { centeringItems, devil } from "./centeringItems";
import { controlGameSounds } from "./controlGameSounds";
import { getSizeOfItem } from "./getSizeOfItem";
import { searchedItemSize, setSearchedItemSize } from "./setSearchedItemSize";
import { setStartWidthOfDevil } from "./setStartWidthOfDevil";

export const searchedItem = document.querySelector('.searched-item')

export function showDevil() {
	delay(8000).then(() => {
		addShowDevilStyles()
		setSearchedItemSize()
		const widthOfDevil = getSizeOfItem(devil, 'width')
		setStartWidthOfDevil(widthOfDevil)
		centeringItems(devil)
		controlGameSounds('mainSound', 'play')
		setInterval(() => {
			searchedItem.style.left = generateSearchedItemNum(searchedItemSize, 'width') + 'px'
			searchedItem.style.bottom = generateSearchedItemNum(searchedItemSize, 'height') + 'px'
		}, getSpeedOfSearchItem)
	})
}