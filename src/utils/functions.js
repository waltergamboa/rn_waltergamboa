import { Platform } from "react-native"

export const isAndroid = Platform.OS === "android"
export const isIOS = Platform.OS === "ios"

export const generateRandomNumberBetween = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
}

export default generateRandomNumberBetween;