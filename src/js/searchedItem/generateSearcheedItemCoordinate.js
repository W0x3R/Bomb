import { getSizeOfItem } from "../getSizeOfItem";

export const generateSearcheedItemCoordinate = (min, value) => {
	let max = Math.floor(getSizeOfItem(document.documentElement, value) - min);
	return Math.floor(Math.random() * (max - min + 1) + min);
}