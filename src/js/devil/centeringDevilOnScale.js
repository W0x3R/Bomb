import { devil } from "../sizesAndcentering/centeringElement"
import { getCenterOfDisplay } from "../sizesAndcentering/getCenterOfDisplay"
import { getSizeOfElement } from "../sizesAndcentering/getSizeOfElement"
import { startWidthOfDevil } from "./setStartWidthOfDevil"

export const centeringDevilOnScale = () => {
	devil.style.left = getCenterOfDisplay('width') - startWidthOfDevil / 2 + 'px'
	devil.style.bottom = getCenterOfDisplay('height') - getSizeOfElement(devil, 'height') / 2 + 'px'
}