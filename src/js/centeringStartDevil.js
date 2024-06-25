import { getCenterOfDisplay, getSizeOfDevil } from ".."

export const devil = document.querySelector('.devil')

export const centeringStartDevil = () => {
	devil.style.left = getCenterOfDisplay('width') - getSizeOfDevil('width') / 2 + 'px'
	devil.style.bottom = getCenterOfDisplay('height') - getSizeOfDevil('height') / 2 + 'px'
}