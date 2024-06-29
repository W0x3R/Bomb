import { getSizeOfElement } from "../sizesAndcentering/getSizeOfElement"
import { speedOfSearchObject } from "./speedOfSearchObject"

export function setSearchObjectSpeed() {
	const width = getSizeOfElement(document.documentElement, 'width')

	for (const item of speedOfSearchObject) {
		if (width >= item.width) {
			return item.speed
		}
	}
}