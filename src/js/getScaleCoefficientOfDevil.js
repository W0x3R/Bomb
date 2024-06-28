import { getSizeOfItem } from "./getSizeOfItem"

export function getScaleCoefficientOfDevil() {
	const height = getSizeOfItem(document.documentElement, 'height')
	const width = getSizeOfItem(document.documentElement, 'width')

	const scaleCoefficient = [
		{ width: 560, coeff: 1.3 },
		{ height: 1000, coeff: 3.3 },
		{ height: 850, coeff: 2.8 },
		{ height: 780, coeff: 2.5 },
		{ height: 702, coeff: 2.25 },
		{ height: 590, coeff: 1.95 },
		{ height: 525, coeff: 1.65 },
		{ height: 450, coeff: 1.35 },
		{ height: 0, coeff: 1 },
	]

	for (const item of scaleCoefficient) {
		if (width <= item.width) {
			return item.coeff
		} if (height >= item.height) {
			return item.coeff
		}
	}
}