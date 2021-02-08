import React from "react";
import { render } from "@testing-library/react-native";

import StartScreen from "../StartScreen";

test("That the intended elements are rendered and are named correctly", () => {
  const { getByText, getByTestId } = render(<StartScreen />);

  // Check that the title is there
  const screenHeader = getByText(/Vil du/i);
  expect(screenHeader).toBeDefined();

  // Check that the default title component is used
  const screenHeaderComponent = getByTestId("DefaultTitle");
  expect(screenHeaderComponent).toBeDefined();
});

test("That the find service button is rendered and named correctly", () => {
  const { getByText, getByTestId } = render(<StartScreen />);

  // Check that the button is there

  // Check that the default button is used
});
