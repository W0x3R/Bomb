import { book } from "../..";
import { devil } from "../sizesAndcentering/centeringElement";
import { searchedItem } from "./showDevil";

export const addShowDevilStyles = () => {
	searchedItem.style.display = 'inline-block';
	book.classList.remove('book_shake')
	book.classList.add('book_hide')
	devil.classList.add('devil_show')
}