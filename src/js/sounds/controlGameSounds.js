import { appSounds } from "./appSounds";

export const controlGameSounds = (name, value) => appSounds[name][value]()