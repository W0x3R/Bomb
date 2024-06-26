import { getSizeOfItem } from "./getSizeOfItem"
import { speedOfSearchItem } from "./speedOfSearchItem"

export function setSpeedOfSearchItem() {
	const width = getSizeOfItem(document.documentElement, 'width')

	for (const item of speedOfSearchItem) {
		if (width >= item.width) {
			return item.speed
		}
	}
}