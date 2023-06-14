import { Dimensions, PixelRatio, Platform } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");

// based on iphone 6 scale
const ScaleHeight = SCREEN_HEIGHT / 812;
const ScaleWidth = SCREEN_WIDTH / 375;
const STANDARD_WIDTH = 375;
const CURRENT_WIDTH = SCREEN_WIDTH;
const K = CURRENT_WIDTH / STANDARD_WIDTH;

export function normalizeFont(size) {
  const newSize = size * ScaleWidth;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const halfWidth = width / 2 - 80;

export const scaleHeight = (height) => Math.round(height * ScaleHeight);

export const scaleWidth = (width) => Math.round(width * ScaleWidth);

/**
 *
 * @param {*} size - Size (in numbers) given to width, height, paddings
 */
export function dynamicSize(size) {
  return K * size;
}
export const { height, width } = Dimensions.get("window");

function roundOff(v) {
  return Math.round(v);
}
