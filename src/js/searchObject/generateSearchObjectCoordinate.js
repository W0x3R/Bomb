import { getSizeOfElement } from "../sizesAndcentering/getSizeOfElement";

export const generateSearchObjectCoordinate = (min, value) => {
	let max = Math.floor(getSizeOfElement(document.documentElement, value) - min);
	return Math.floor(Math.random() * (max - min + 1) + min);
}