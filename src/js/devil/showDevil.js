import { addShowDevilStyles } from "./addShowDevilStyles";
import { centeringItems, devil } from "../centeringItems";
import { delay } from "../delay";
import { getSizeOfItem } from "../getSizeOfItem";
import { movingSearchObject } from "../searchedObject/movingSearchObject";
import { setSearchObjectSize } from "../searchedObject/setSearchObjectSize";
import { setStartWidthOfDevil } from "./setStartWidthOfDevil";
import { controlGameSounds } from "../sounds/controlGameSounds";

export const searchedItem = document.querySelector('.searched-item')

export function showDevil() {
	delay(8000).then(() => {
		addShowDevilStyles()
		setSearchObjectSize()
		const widthOfDevil = getSizeOfItem(devil, 'width')
		setStartWidthOfDevil(widthOfDevil)
		centeringItems(devil)
		controlGameSounds('mainSound', 'play')
		movingSearchObject()
	})
}