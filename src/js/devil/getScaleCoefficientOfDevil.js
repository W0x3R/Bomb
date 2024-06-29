import { getSizeOfElement } from "../sizesAndcentering/getSizeOfElement"
import { scaleCoefficientOfDevil } from "./scaleCoefficientOfDevil"

export function getScaleCoefficientOfDevil() {
	const height = getSizeOfElement(document.documentElement, 'height')
	const width = getSizeOfElement(document.documentElement, 'width')

	for (const item of scaleCoefficientOfDevil) {
		if (width <= item.width) {
			return item.coeff
		} if (height >= item.height) {
			return item.coeff
		}
	}
}