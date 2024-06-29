import { addShowDevilStyles } from "./addShowDevilStyles";
import { centeringItems, devil } from "../centeringItems";
import { delay } from "../delay";
import { getSizeOfItem } from "../getSizeOfItem";
import { movingSearchedItem } from "../searchedItem/movingSearchedItem";
import { setSearchedItemSize } from "../searchedItem/setSearchedItemSize";
import { setStartWidthOfDevil } from "./setStartWidthOfDevil";
import { controlGameSounds } from "../sounds/controlGameSounds";

export const searchedItem = document.querySelector('.searched-item')

export function showDevil() {
	delay(8000).then(() => {
		addShowDevilStyles()
		setSearchedItemSize()
		const widthOfDevil = getSizeOfItem(devil, 'width')
		setStartWidthOfDevil(widthOfDevil)
		centeringItems(devil)
		controlGameSounds('mainSound', 'play')
		movingSearchedItem()
	})
}