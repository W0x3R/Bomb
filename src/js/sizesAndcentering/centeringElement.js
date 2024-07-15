import { getCenterOfDisplay } from "./getCenterOfDisplay"
import { getSizeOfElement } from "./getSizeOfElement"

export const centeringElement = (el) => {
	el.style.left = getCenterOfDisplay('width') - getSizeOfElement(el, 'width') / 2 + 'px'
	el.style.bottom = getCenterOfDisplay('height') - getSizeOfElement(el, 'height') / 2 + 'px'
}