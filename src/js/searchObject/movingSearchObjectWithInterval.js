import { movingSearchObject } from "./movingSearchObject"
import { setSearchObjectSpeed } from './setSearchItemSpeed'

export const movingSearchObjectWithInterval = () => {
	const getSpeedOfSearchItem = setSearchObjectSpeed()
	setInterval(movingSearchObject, getSpeedOfSearchItem)
} 