import { getSizeOfItem } from "./getSizeOfItem"

export function setSpeedOfSearchItem() {
	const width = getSizeOfItem(document.documentElement, 'width')
	const speedOfSearchItem = [
		{ width: 1400, speed: 790 },
		{ width: 1200, speed: 810 },
		{ width: 1100, speed: 790 },
		{ width: 1000, speed: 770 },
		{ width: 850, speed: 760 },
		{ width: 320, speed: 650 }
	]
	for (const item of speedOfSearchItem) {
		if (width >= item.width) {
			return item.speed
		}
	}
}