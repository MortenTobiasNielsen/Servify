import { Dimensions, PixelRatio } from "react-native";

let Width = Dimensions.get("window").width;
let Height = Dimensions.get("window").height;

export const GetNormalizedWidthFromPercent = (percent: number): number => {
  return PixelRatio.roundToNearestPixel((Width * percent) / 100);
};

export const GetNormalizedHeightFromPercent = (percent: number): number => {
  return PixelRatio.roundToNearestPixel((Height * percent) / 100);
};

export const listenToChanges = (functionToTrigger: () => void): void => {
  Dimensions.addEventListener("change", (newDimensions) => {
    Width = newDimensions.window.width;
    Height = newDimensions.window.height;

    functionToTrigger();
  });
};

export const removeListener = () => {
  Dimensions.removeEventListener("change", () => {});
};
