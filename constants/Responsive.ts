import { Dimensions, PixelRatio } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;
let scale = Dimensions.get("window").scale;

const roundToNearestPixel = (layoutSize: number): number => {
  return Math.round(layoutSize * scale) / scale;
};

export const getNormalizedWidthFromPercent = (percent: number): number => {
  return roundToNearestPixel((width * percent) / 100);
};

export const getNormalizedHeightFromPercent = (percent: number): number => {
  return roundToNearestPixel((height * percent) / 100);
};

export const listenToChanges = (functionToTrigger: () => void): void => {
  Dimensions.addEventListener("change", (newDimensions) => {
    width = newDimensions.window.width;
    height = newDimensions.window.height;

    functionToTrigger();
  });
};

export const removeListener = () => {
  Dimensions.removeEventListener("change", () => {});
};

// ---------------------------------------------------------------------------
// Mocking for testing
// ---------------------------------------------------------------------------
export const testFunctionality = (
  windowWidth: number,
  windowHeight: number,
  windowScale: number,
  percent: number,
  testWidth: boolean
): number => {
  width = windowWidth;
  height = windowHeight;
  scale = windowScale;

  if (testWidth) {
    return getNormalizedWidthFromPercent(percent);
  }
  return getNormalizedHeightFromPercent(percent);
};
