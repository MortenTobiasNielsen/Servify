import React from "react";
import { render, waitFor, fireEvent, act } from "@testing-library/react-native";

import App from "./App";

test("The user navigation journey when not logged in", async () => {
  jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");
  const { getByTestId, getByText, getByLabelText } = await waitFor(() =>
    render(<App />)
  );

  // ---------------------------------------------------------------------------
  // Start screen
  // ---------------------------------------------------------------------------

  // Check that the rendered screen is the start screen
  expect(getByTestId("StartScreen")).toBeDefined();

  // Check that the tabs navigator is shown
  expect(getByLabelText(/Start side, tab,/i)).toBeDefined();
  expect(getByLabelText(/Log ind, tab,/i)).toBeDefined();
  expect(getByLabelText(/Opret Bruger, tab,/i)).toBeDefined();

  // Check that the "Finde en service" button is there
  // and it can be pressed
  const findServiceButton = getByText(/Finde En Service/i);
  fireEvent.press(findServiceButton);

  // ---------------------------------------------------------------------------
  // Choose Service screen
  // ---------------------------------------------------------------------------

  // Check that the rendered screen is the ChooseService screen
  expect(getByTestId("ChooseService")).toBeDefined();

  // Check that the tabs navigator is shown
  expect(getByLabelText(/Start side, tab,/i)).toBeDefined();
  expect(getByLabelText(/Log ind, tab,/i)).toBeDefined();
  expect(getByLabelText(/Opret Bruger, tab,/i)).toBeDefined();

  // Check that the "Vælg Service" button is there
  // and it can be pressed
  const ChooseServiceButton = getByText(/Vælg Service/i);
  fireEvent.press(ChooseServiceButton);

  // ---------------------------------------------------------------------------
  // Service Details screen
  // ---------------------------------------------------------------------------

  // Check that the rendered screen is service details
  expect(getByTestId("ServiceDetails")).toBeDefined();

  // Check that the tabs navigator is shown
  expect(getByLabelText(/Start side, tab,/i)).toBeDefined();
  expect(getByLabelText(/Log ind, tab,/i)).toBeDefined();
  expect(getByLabelText(/Opret Bruger, tab,/i)).toBeDefined();

  // Check that the "Estimer pris" button is there
  // and it can be pressed
  const estimatePriceButton = getByText(/Estimer pris/i);
  await act(async () => {
    fireEvent.press(estimatePriceButton);
  });

  // ---------------------------------------------------------------------------
  // Choose Service Provider screen
  // ---------------------------------------------------------------------------

  // Check that the rendered screen is Choose Service Provider
  expect(getByTestId("ChooseServiceProvider")).toBeDefined();

  // Check that the tabs navigator is shown
  expect(getByLabelText(/Start side, tab,/i)).toBeDefined();
  expect(getByLabelText(/Log ind, tab,/i)).toBeDefined();
  expect(getByLabelText(/Opret Bruger, tab,/i)).toBeDefined();
});
