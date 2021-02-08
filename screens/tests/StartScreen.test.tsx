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
  const findServiceButton = getByText(/Finde en service/i);
  expect(findServiceButton).toBeDefined();

  // Check that the default button is used
  const findServiceButtonComponent = getByTestId("DefaultButton");
  expect(findServiceButtonComponent).toBeDefined();
});
