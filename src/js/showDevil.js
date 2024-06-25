import { delay, book, getSizeOfDevil, generateSearchedItemNum, getSpeedOfSearchItem } from "..";
import { centeringStartDevil } from "./centeringStartDevil";
import { controlGameSounds } from "./controlGameSounds";
import { searchedItemSize, setSearchedItemSize } from "./setSearchedItemSize";
import { setStartWidthOfDevil } from "./setStartWidthOfDevil";

export const devil = document.querySelector('.devil')
export const searchedItem = document.querySelector('.searched-item')

export function showDevil() {
	delay(8000).then(() => {
		const widthOfDevil = getSizeOfDevil('width')
		searchedItem.style.display = 'inline-block';
		setSearchedItemSize()
		book.classList.remove('book_shake')
		book.classList.add('book_hide')
		devil.classList.add('devil_show')
		setStartWidthOfDevil(widthOfDevil)
		centeringStartDevil()
		controlGameSounds('mainSound', 'play')
		setInterval(() => {
			searchedItem.style.left = generateSearchedItemNum(searchedItemSize, 'width') + 'px'
			searchedItem.style.bottom = generateSearchedItemNum(searchedItemSize, 'height') + 'px'
		}, getSpeedOfSearchItem)
	})
}