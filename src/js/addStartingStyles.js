import { book } from "../index.js";
import { playStartGameSounds } from "./playStartGameSounds.js";
import { rules } from "./rules.js";

export const startGameButton = document.querySelector('.play')
const bookStar = document.querySelector('.book__star')
const bookEllipse = document.querySelector('.book__ellipse')

export function addStartingStyles() {
	startGameButton.classList.add('play_active');
	book.classList.add('book_shake')
	bookStar.classList.add('book__star_active');
	bookEllipse.classList.add('book__ellipse_active')
	rules.remove()
	playStartGameSounds()
}