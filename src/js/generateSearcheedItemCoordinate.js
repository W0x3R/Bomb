import { getSizeOfDisplay } from "..";

export const generateSearcheedItemCoordinate = (min, value) => {
	let max = Math.floor(getSizeOfDisplay([value]) - min);
	return Math.floor(Math.random() * (max - min + 1) + min);
}