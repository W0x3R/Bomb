import { book } from "../startGame/addStartingStyles";
import { searchedItem } from "../searchedObject/movingSearchObject";
import { controlDisplayDevil } from "./controlDisplayDevil";

export const addShowDevilStyles = () => {
	searchedItem.style.display = 'inline-block';
	book.classList.remove('book_shake')
	book.classList.add('book_hide')
	controlDisplayDevil('add')
}