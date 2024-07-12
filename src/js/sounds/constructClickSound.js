export const constructClickSound = (src) => {
	const audio = new Audio();
	audio.src = src;
	audio.play()
}