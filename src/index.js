import './style.scss'
import { centeringElement } from './js/sizesAndcentering/centeringElement.js';
import { clickEvents } from './js/eventHandlers/clickEvents.js';
import { callEvents } from './js/eventHandlers/callEvents.js';
import { setSearchObjectSize } from './js/searchedObject/setSearchObjectSize.js';
import { setRulesLanguage } from './js/setRulesLanguage.js';
import { defeatGame } from './js/gameResult/defeatGame.js';
import { book } from './js/addStartingStyles.js';

let timer = 0

setRulesLanguage()

window.addEventListener('click', (e) => callEvents(e, clickEvents))

window.addEventListener('resize', () => {
	setSearchObjectSize()
	centeringElement(book)
})

export function checkEndOfGame() {
	timer < 56 ? ++timer : defeatGame()
}