import React from "react";
import { render } from "@testing-library/react-native";

import ServiceDetails from "../ServiceDetails";

test("That the choose service screen is rendered correctly", () => {
  // @ts-ignore
  const { getByTestId, getByText } = render(<ServiceDetails />);

  // Check that the rendered screen is the choose service
  expect(getByTestId("ServiceDetails")).toBeDefined();

  // Check that the estimate price button is there
  const buttonName = "Estimer pris";
  const buttonNameRegex = new RegExp(buttonName, "i");

  const estimatePriceButton = getByText(buttonNameRegex);
  expect(estimatePriceButton).toBeDefined();

  // Check that the default button is used
  const estimatePriceButtonComponent = getByTestId(
    "DefaultButton - " + buttonName
  );
  expect(estimatePriceButtonComponent).toBeDefined();
});
