import { getSizeOfItem } from "../getSizeOfItem"
import { speedOfSearchObject } from "./speedOfSearchObject"

export function setSearchObjectSpeed() {
	const width = getSizeOfItem(document.documentElement, 'width')

	for (const item of speedOfSearchObject) {
		if (width >= item.width) {
			return item.speed
		}
	}
}