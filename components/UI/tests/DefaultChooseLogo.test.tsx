import React from "react";
import { render } from "@testing-library/react-native";

import DefaultChooseLogo from "../DefaultChooseLogo";

test("Ensure that the default choose logo screen is rendered correctly", () => {
  const { getByText, getByTestId } = render(<DefaultChooseLogo />);

  // Check that Tilføj Logo is present
  expect(getByText(/Tilføj Logo/i)).toBeDefined();
});
