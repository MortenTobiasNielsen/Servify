import React from "react";
import { render } from "@testing-library/react-native";

import StartScreen from "../StartScreen";

test("That the find service button is rendered and named correctly", () => {
  // @ts-ignore
  const { getByText, getByTestId } = render(<StartScreen />);
  const buttonName = "Find Service";
  const buttonNameRegex = new RegExp(buttonName, "i");

  // Check that the button is there
  const findServiceButton = getByText(buttonNameRegex);
  expect(findServiceButton).toBeDefined();

  // Check that the default button is used
  const findServiceButtonComponent = getByTestId(
    "DefaultButton - " + buttonName
  );
  expect(findServiceButtonComponent).toBeDefined();
});

test("That the provide service button is rendered and named correctly", () => {
  // @ts-ignore
  const { getByText, getByTestId } = render(<StartScreen />);
  const buttonName = "Udbyd Service";
  const buttonNameRegex = new RegExp(buttonName, "i");

  // Check that the button is there
  const findServiceButton = getByText(buttonNameRegex);
  expect(findServiceButton).toBeDefined();

  // Check that the default button is used
  const findServiceButtonComponent = getByTestId(
    "DefaultButton - " + buttonName
  );
  expect(findServiceButtonComponent).toBeDefined();
});
