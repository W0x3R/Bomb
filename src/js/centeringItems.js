import { getCenterOfDisplay } from ".."
import { getSizeOfItem } from "./getSizeOfItem"

export const devil = document.querySelector('.devil')

export const centeringItems = (item) => {
	item.style.left = getCenterOfDisplay('width') - getSizeOfItem(item, 'width') / 2 + 'px'
	item.style.bottom = getCenterOfDisplay('height') - getSizeOfItem(item, 'height') / 2 + 'px'
}