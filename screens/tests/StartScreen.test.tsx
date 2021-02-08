import React from "react";
import { render } from "@testing-library/react-native";

import StartScreen from "../StartScreen";

test("That the intended elements are rendered and are named correctly", () => {
  const { getByText } = render(<StartScreen />);

  // Ensure that the heading is there
  const screenHeader = getByText(/Vil du/i);
  expect(screenHeader).toBeDefined();
});
