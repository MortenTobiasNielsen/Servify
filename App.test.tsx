import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react-native";

import App from "./App";

test("The user navigation journey when not logged in", async () => {
  jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");
  const { getByTestId, getByText } = await waitFor(() => render(<App />));

  // Check that the rendered screen is the start screen
  expect(getByTestId("StartScreen")).toBeDefined();

  // Check that the rendered screen is the choose service screen
  // When the find service button is clicked
  const findServiceButton = getByText(/Finde en service/i);
  fireEvent.press(findServiceButton);

  // Check that the rendered screen is the choose service screen
  expect(getByTestId("ChooseService")).toBeDefined();
});
