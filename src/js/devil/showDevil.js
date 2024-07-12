import { addShowDevilStyles } from "./addShowDevilStyles";
import { centeringElement, devil } from "../sizesAndcentering/centeringElement";
import { delay } from "../delay";
import { getSizeOfElement } from "../sizesAndcentering/getSizeOfElement";
import { movingSearchObjectWithInterval } from "../searchedObject/movingSearchObject";
import { setStartWidthOfDevil } from "./setStartWidthOfDevil";
import { controlGameSounds } from "../sounds/controlGameSounds";
import { displayFoundItemsBlock } from '../displayFoundItemsBlock'

export const showDevil = () => {
	delay(8000).then(() => {
		addShowDevilStyles()
		const widthOfDevil = getSizeOfElement(devil, 'width')
		setStartWidthOfDevil(widthOfDevil)
		centeringElement(devil)
		controlGameSounds('mainSound', 'play')
		movingSearchObjectWithInterval()
		displayFoundItemsBlock('add')
	})
}