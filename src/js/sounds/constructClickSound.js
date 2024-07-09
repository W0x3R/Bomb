const audio = new Audio();

export const constructClickSound = (src) => {
	audio.src = src;
	audio.play()
}