import { defeatGame } from "../gameResult/defeatGame"

let timer = 0

export const checkEndOfGame = () => timer < 56 ? ++timer : defeatGame()