import { getSizeOfItem } from "./getSizeOfItem"
import { scaleCoefficientOfDevil } from "./scaleCoefficientOfDevil"

export function getScaleCoefficientOfDevil() {
	const height = getSizeOfItem(document.documentElement, 'height')
	const width = getSizeOfItem(document.documentElement, 'width')

	for (const item of scaleCoefficientOfDevil) {
		if (width <= item.width) {
			return item.coeff
		} if (height >= item.height) {
			return item.coeff
		}
	}
}