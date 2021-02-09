import React from "react";
import { render } from "@testing-library/react-native";

import ServiceProviderDetails from "../ServiceProviderDetails";

test("That the choose service screen is rendered correctly", () => {
  const { getByTestId, getByText, getByLabelText } = render(
    // @ts-ignore
    <ServiceProviderDetails />
  );

  // Check that the rendered screen is the start screen
  expect(getByTestId("ServiceProviderDetails")).toBeDefined();

  // Check that the "not logged in message" is there
  // Check that the estimate price button is there
  const message = "log ind for at kontakte";
  const messageRegex = new RegExp(message, "i");
  const NotLoggedInMessage = getByText(messageRegex);

  // Check that the login button is shown
  const loginButton = getByLabelText(/Log Ind/i);
  expect(loginButton).toBeDefined();

  // Check that the register button is shown
  const registerButton = getByLabelText(/Opret Bruger/i);
  expect(registerButton).toBeDefined();
});
