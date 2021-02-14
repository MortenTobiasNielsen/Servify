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
  const findServiceButton = getByText(/Find Service/i);
  await act(async () => {
    fireEvent.press(findServiceButton);
  });

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
  await act(async () => {
    fireEvent.press(ChooseServiceButton);
  });

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

  // Check that the "Vælg Udbyder" button is there
  // and it can be pressed
  const ChooseProviderButton = getByText(/Vælg Udbyder/i);
  await act(async () => {
    fireEvent.press(ChooseProviderButton);
  });

  // ---------------------------------------------------------------------------
  // Provider Details screen
  // ---------------------------------------------------------------------------

  // Check that the rendered screen is Provider details
  expect(getByTestId("ServiceProviderDetails")).toBeDefined();

  // Check that the tabs navigator is shown
  expect(getByLabelText(/Start side, tab,/i)).toBeDefined();
  expect(getByLabelText(/Log ind, tab,/i)).toBeDefined();
  expect(getByLabelText(/Opret Bruger, tab,/i)).toBeDefined();

  // Check that the "Log Ind" button is there
  // and it can be pressed
  const LogInButton = getByTestId(/DefaultButton - Log Ind/i);
  await act(async () => {
    fireEvent.press(LogInButton);
  });

  // ---------------------------------------------------------------------------
  // Login screen
  // ---------------------------------------------------------------------------

  // Check that the rendered screen is Login
  expect(getByTestId("Login")).toBeDefined();

  // Check that the tabs navigator is shown
  const ToStartPage = getByLabelText(/Start side, tab,/i);
  expect(getByLabelText(/Start side, tab,/i)).toBeDefined();
  expect(getByLabelText(/Log ind, tab,/i)).toBeDefined();
  expect(getByLabelText(/Opret Bruger, tab,/i)).toBeDefined();

  // Go back to check the "Opret bruger" button
  await act(async () => {
    fireEvent.press(ToStartPage);
  });

  // ---------------------------------------------------------------------------
  // Register screen
  // ---------------------------------------------------------------------------

  // Check that the "Opret Bruger" button is there
  // and it can be pressed
  const RegisterButton = getByTestId(/DefaultButton - Opret Bruger/i);
  await act(async () => {
    fireEvent.press(RegisterButton);
  });

  // Check that the rendered screen is Register
  expect(getByTestId("Register")).toBeDefined();
});
