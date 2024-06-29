import { checkEndOfGame } from ".."

let timerCheckEndGame

export const startTimerCheckEndGame = () => timerCheckEndGame = setInterval(checkEndOfGame, 1000)

export const clearTimerCheckEndGame = () => clearInterval(timerCheckEndGame);