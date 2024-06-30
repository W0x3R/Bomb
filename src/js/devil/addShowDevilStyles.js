import { book } from "../startGame/addStartingStyles";
import { devil } from "../sizesAndcentering/centeringElement";
import { searchedItem } from "../searchedObject/movingSearchObject";

export const addShowDevilStyles = () => {
	searchedItem.style.display = 'inline-block';
	book.classList.remove('book_shake')
	book.classList.add('book_hide')
	devil.classList.add('devil_show')
}