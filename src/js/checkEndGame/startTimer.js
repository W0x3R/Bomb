import { checkEndOfGame } from "./checkEndOfGame";

export let timerCheckEndGame

export const startTimerCheckEndGame = () => timerCheckEndGame = setInterval(checkEndOfGame, 1000)