import { delay } from "../delay";
import { devil } from "../sizesAndcentering/centeringElement";
import { getCenterOfDisplay } from "../sizesAndcentering/getCenterOfDisplay";
import { getSizeOfElement } from "../sizesAndcentering/getSizeOfElement";
import { getScaleCoefficientOfDevil } from "./getScaleCoefficientOfDevil";
import { setStartWidthOfDevil, startWidthOfDevil } from "./setStartWidthOfDevil";

export let timerScaleDevil

export const scaleDevil = () => {
	delay(9001).then(() => {
		timerScaleDevil = setInterval(() => {
			let scaleWidth = getScaleCoefficientOfDevil()
			setStartWidthOfDevil(startWidthOfDevil + scaleWidth)
			devil.style.width = startWidthOfDevil + 'px'
			devil.style.left = getCenterOfDisplay('width') - startWidthOfDevil / 2 + 'px'
			devil.style.bottom = getCenterOfDisplay('height') - getSizeOfElement(devil, 'height') / 2 + 'px'
		}, 200);
	})
}