import { delay, getSizeOfDevil, generateSearchedItemNum, getSpeedOfSearchItem } from "..";
import { addShowDevilStyles } from "./addShowDevilStyles";
import { centeringStartDevil } from "./centeringStartDevil";
import { controlGameSounds } from "./controlGameSounds";
import { searchedItemSize, setSearchedItemSize } from "./setSearchedItemSize";
import { setStartWidthOfDevil } from "./setStartWidthOfDevil";

export const searchedItem = document.querySelector('.searched-item')

export function showDevil() {
	delay(8000).then(() => {
		const widthOfDevil = getSizeOfDevil('width')
		addShowDevilStyles()
		setSearchedItemSize()
		setStartWidthOfDevil(widthOfDevil)
		centeringStartDevil()
		controlGameSounds('mainSound', 'play')
		setInterval(() => {
			searchedItem.style.left = generateSearchedItemNum(searchedItemSize, 'width') + 'px'
			searchedItem.style.bottom = generateSearchedItemNum(searchedItemSize, 'height') + 'px'
		}, getSpeedOfSearchItem)
	})
}