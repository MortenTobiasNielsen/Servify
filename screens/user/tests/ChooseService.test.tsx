import React from "react";
import { render } from "@testing-library/react-native";

import ChooseService from "../ChooseService";

test("That the choose service screen is rendered correctly", () => {
  // @ts-ignore
  const { getByTestId, getByText } = render(<ChooseService />);

  // Check that the rendered screen is the start screen
  expect(getByTestId("ChooseService")).toBeDefined();

  // Check that the estimate price button is there
  const buttonName = "Vælg Service";
  const buttonNameRegex = new RegExp(buttonName, "i");

  const estimatePriceButton = getByText(buttonNameRegex);
  expect(estimatePriceButton).toBeDefined();

  // Check that the default button is used
  const estimatePriceButtonComponent = getByTestId(
    "DefaultButton - " + buttonName
  );
  expect(estimatePriceButtonComponent).toBeDefined();
});
