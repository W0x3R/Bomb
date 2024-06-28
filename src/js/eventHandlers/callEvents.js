export const callEvents = (e, eventObject) => {
	const target = e.target
	for (const selector in eventObject) {
		if (target.closest(selector)) {
			eventObject[selector]()
			break
		}
	}
}