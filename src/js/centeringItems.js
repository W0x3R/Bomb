import { getCenterOfDisplay } from ".."

export const devil = document.querySelector('.devil')

export const centeringItems = (item, itemSize) => {
	item.style.left = getCenterOfDisplay('width') - itemSize('width') / 2 + 'px'
	item.style.bottom = getCenterOfDisplay('height') - itemSize('height') / 2 + 'px'
}