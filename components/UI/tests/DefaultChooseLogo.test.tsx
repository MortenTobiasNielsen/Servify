import React from "react";
import { render } from "@testing-library/react-native";

import DefaultChooseLogo from "../DefaultChooseLogo";

// TODO: Figure out how you can make a useful test for this component
test("Ensure that the default choose logo screen is rendered correctly", () => {
  const { getByText, getByTestId } = render(<DefaultChooseLogo />);

  // Check that Tilføj Logo is present
  expect(getByText(/Tilføj Logo/i)).toBeDefined();
});
