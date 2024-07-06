import { addShowDevilStyles } from "./addShowDevilStyles";
import { centeringElement, devil } from "../sizesAndcentering/centeringElement";
import { delay } from "../delay";
import { getSizeOfElement } from "../sizesAndcentering/getSizeOfElement";
import { movingSearchObject } from "../searchedObject/movingSearchObject";
import { setSearchObjectSize } from "../searchedObject/setSearchObjectSize";
import { setStartWidthOfDevil } from "./setStartWidthOfDevil";
import { controlGameSounds } from "../sounds/controlGameSounds";
import { displayFoundItemsBlock } from '../displayFoundItemsBlock'

export const showDevil = () => {
	delay(8000).then(() => {
		addShowDevilStyles()
		setSearchObjectSize()
		const widthOfDevil = getSizeOfElement(devil, 'width')
		setStartWidthOfDevil(widthOfDevil)
		centeringElement(devil)
		controlGameSounds('mainSound', 'play')
		movingSearchObject()
		displayFoundItemsBlock('add')
	})
}