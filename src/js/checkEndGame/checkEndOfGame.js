import { defeatGame } from "../gameResult/defeatGame"

let timer = 0

export function checkEndOfGame() {
	timer < 56 ? ++timer : defeatGame()
}