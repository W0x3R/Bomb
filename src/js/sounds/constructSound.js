export const constructSound = (src) => {
	const audio = new Audio();
	audio.src = src;
	audio.play()
}