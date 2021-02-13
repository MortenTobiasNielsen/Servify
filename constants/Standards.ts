import * as Responsive from "./Responsive";

// ---------------------------------------------------------------------------
// Standard Colors
// ---------------------------------------------------------------------------
export const Colors = {
  primary: "#C2185B",
  accent: "#FFC107",
  buttonText: "#FFF",
  text: "#444",
  borders: "#888",
};

// ---------------------------------------------------------------------------
// Standard Fonts
// ---------------------------------------------------------------------------
export const Fonts = {
  openSans: "open-sans",
  openSansBold: "open-sans-bold",
};

// ---------------------------------------------------------------------------
// Standard Padding
// ---------------------------------------------------------------------------
export const Padding = {
  small: Responsive.getNormalizedHeightFromPercent(0.2),
  medium: Responsive.getNormalizedHeightFromPercent(0.5),
  large: Responsive.getNormalizedHeightFromPercent(1),
};

// ---------------------------------------------------------------------------
// Standard borderRadius
// ---------------------------------------------------------------------------
export const BorderRadius = {
  small: Responsive.getNormalizedHeightFromPercent(0.3),
  medium: Responsive.getNormalizedHeightFromPercent(0.5),
  large: Responsive.getNormalizedHeightFromPercent(1),
};

// ---------------------------------------------------------------------------
// Standard border
// ---------------------------------------------------------------------------
export const Border = {
  small: Responsive.getNormalizedHeightFromPercent(0.15),
  medium: Responsive.getNormalizedHeightFromPercent(0.25),
  large: Responsive.getNormalizedHeightFromPercent(0.35),
};

// ---------------------------------------------------------------------------
// Standard FontSize
// ---------------------------------------------------------------------------
export const FontSize = {
  small: Responsive.getNormalizedHeightFromPercent(2),
  medium: Responsive.getNormalizedHeightFromPercent(3),
  large: Responsive.getNormalizedHeightFromPercent(4),
};

// ---------------------------------------------------------------------------
// Standard AddRemoveButton
// ---------------------------------------------------------------------------
const AddRemoveButtonSize = 3;

export const AddRemoveButton = {
  size: Responsive.getNormalizedHeightFromPercent(AddRemoveButtonSize),
  Radius: Responsive.getNormalizedHeightFromPercent(AddRemoveButtonSize * 0.5),
  LineLength: Responsive.getNormalizedHeightFromPercent(
    AddRemoveButtonSize * 0.6
  ),
  LineWidth: Responsive.getNormalizedHeightFromPercent(
    AddRemoveButtonSize * 0.1
  ),
};

// ---------------------------------------------------------------------------
// Standard Profile Logo
// ---------------------------------------------------------------------------
const ProfileLogoSize = 15;

export const ProfileLogo = {
  size: Responsive.getNormalizedHeightFromPercent(ProfileLogoSize),
  Radius: Responsive.getNormalizedHeightFromPercent(ProfileLogoSize * 0.5),
};
