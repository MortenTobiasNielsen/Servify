import React from "react";
import { render } from "@testing-library/react-native";

import StartScreen from "../StartScreen";

test("That the intended elements are rendered and are named correctly", () => {
  // @ts-ignore
  const { getByText, getByTestId } = render(<StartScreen />);
  const title = "Vil du";
  const buttonNameRegex = new RegExp(title, "i");

  // Check that the title is there
  const screenHeader = getByText(buttonNameRegex);
  expect(screenHeader).toBeDefined();

  // Check that the default title component is used
  const screenHeaderComponent = getByTestId("DefaultTitle - " + title);
  expect(screenHeaderComponent).toBeDefined();
});

test("That the find service button is rendered and named correctly", () => {
  // @ts-ignore
  const { getByText, getByTestId } = render(<StartScreen />);
  const buttonName = "Finde En Service";
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
  const buttonName = "Udbyde En Service";
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
