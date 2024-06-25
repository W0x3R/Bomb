import { delay, book, getSizeOfDevil, getCenterOfDisplay, generateSearchedItemNum, getSpeedOfSearchItem } from "..";
import { controlGameSounds } from "./controlGameSounds";
import { searchedItemSize, setSearchedItemSize } from "./setSearchedItemSize";
import { setStartWidthOfDevil } from "./setStartWidthOfDevil";

export const devil = document.querySelector('.devil')
export const searchedItem = document.querySelector('.searched-item')

export function showDevil() {
	delay(8000).then(() => {
		searchedItem.style.display = 'inline-block';
		setSearchedItemSize()
		book.classList.remove('book_shake')
		book.classList.add('book_hide')
		devil.classList.add('devil_show')
		setStartWidthOfDevil(getSizeOfDevil('width'))
		devil.style.left = getCenterOfDisplay('width') - getSizeOfDevil('width') / 2 + 'px'
		devil.style.bottom = getCenterOfDisplay('height') - getSizeOfDevil('height') / 2 + 'px'
		controlGameSounds('mainSound', 'play')
		setInterval(() => {
			searchedItem.style.left = generateSearchedItemNum(searchedItemSize, 'width') + 'px'
			searchedItem.style.bottom = generateSearchedItemNum(searchedItemSize, 'height') + 'px'
		}, getSpeedOfSearchItem)
	})
}