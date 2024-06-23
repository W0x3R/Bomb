export const rules = document.querySelector('.rules')
const englishLanguageIcon = document.querySelector('.rules__inner_en')
const russianLanguageIcon = document.querySelector('.rules__inner_ru')
const rulesBlock = document.querySelector('.rules__inner')
const rulesText = document.querySelector('.rules__inner-text')

let rulesTextObject = {
	en: 'The world collapsed when the king of&nbsp;hell took over. Everyone who tried to&nbsp;stop him before you is&nbsp;dead. In&nbsp;order to&nbsp;end this once and for all, you need to&nbsp;click on&nbsp;the button above. After you click on&nbsp;it, the spell book will open and the summoning of&nbsp;the king of&nbsp;hell will begin. Remember that once you click, there is&nbsp;no&nbsp;going back. If&nbsp;you still dare to&nbsp;press, then you will need to&nbsp;catch 10&nbsp;pentagrams in&nbsp;order to&nbsp;put an&nbsp;end to&nbsp;this terrible creature once and for all. Be&nbsp;careful and persistent, the king of&nbsp;hell will try in&nbsp;every possible way to&nbsp;interfere with you, moving the pentagram to&nbsp;different parts of&nbsp;the screen.<br> Good luck.',

	ru: 'Мир рухнул, когда его захватил король ада. Все, кто пытался остановить его до&nbsp;тебя, мертвы. Для того чтобы покончить с&nbsp;этим раз и&nbsp;навсегда, нужно нажать на&nbsp;кнопку сверху. После того, как ты&nbsp;нажмешь на&nbsp;неё, откроется книга заклинаний, и&nbsp;начнется призыв короля ада. Помни, что после нажатия пути назад уже не&nbsp;будет. Если всё-таки осмелишься нажать, то&nbsp;тебе нужно будет словить 10&nbsp;пентаграмм, чтобы раз и&nbsp;навсегда покончить с&nbsp;этим ужасным существом. Будь внимателен и&nbsp;настойчив, король ада будет всячески пытаться помешать тебе, перемещая пентаграмму в&nbsp;разные части экрана. <br>Удачи.'
}

function showRussianLanguageIcon() {
	englishLanguageIcon.style.display = 'none'
	russianLanguageIcon.style.display = 'block'
	rulesText.innerHTML = rulesTextObject.ru
	localStorage.setItem('language', 'ru')
}

function showEnglishLanguageIcon() {
	russianLanguageIcon.style.display = 'none'
	englishLanguageIcon.style.display = 'block'
	rulesText.innerHTML = rulesTextObject.en
	localStorage.setItem('language', 'en')
}

export { englishLanguageIcon, russianLanguageIcon, rulesBlock, rulesText, rulesTextObject, showRussianLanguageIcon, showEnglishLanguageIcon } 