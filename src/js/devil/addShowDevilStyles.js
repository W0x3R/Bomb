import { book } from "../startGame/addStartingStyles";
import { searchObject } from "../searchObject/movingSearchObject";
import { controlDisplayDevil } from "./controlDisplayDevil";

export const addShowDevilStyles = () => {
	searchObject.style.display = 'inline-block';
	book.classList.remove('book_shake')
	book.classList.add('book_hide')
	controlDisplayDevil('add')
}