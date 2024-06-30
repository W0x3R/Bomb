import { delay } from "../delay";
import { devil } from "../sizesAndcentering/centeringElement";
import { centeringDevilOnScale } from "./centeringDevilOnScale";
import { getScaleCoefficientOfDevil } from "./getScaleCoefficientOfDevil";
import { setStartWidthOfDevil, startWidthOfDevil } from "./setStartWidthOfDevil";

export let timerScaleDevil

export const scaleDevil = () => {
	delay(9001).then(() => {
		timerScaleDevil = setInterval(() => {
			let scaleWidth = getScaleCoefficientOfDevil()
			setStartWidthOfDevil(startWidthOfDevil + scaleWidth)
			devil.style.width = startWidthOfDevil + 'px'
			centeringDevilOnScale()
		}, 200);
	})
}