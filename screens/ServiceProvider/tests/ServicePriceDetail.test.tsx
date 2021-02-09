import React from "react";
import { render } from "@testing-library/react-native";

import ServicePriceDetails from "../ServicePriceDetails";

test("That the service price details screen is rendered correctly", () => {
  // @ts-ignore
  const { getByTestId, getByText } = render(<ServicePriceDetails />);

  // Check that the rendered screen is the start screen
  expect(getByTestId("ServicePriceDetails")).toBeDefined();

  // Check that the choose service button is there
  const AddPriceParameterButtonName = "Tilføj";
  const AddPriceParameterButtonNameRegex = new RegExp(
    AddPriceParameterButtonName,
    "i"
  );

  const AddPriceParameterButton = getByText(AddPriceParameterButtonNameRegex);
  expect(AddPriceParameterButton).toBeDefined();

  // Check that the default button is used
  const AddPriceParameterButtonComponent = getByTestId(
    "DefaultButton - " + AddPriceParameterButtonName
  );
  expect(AddPriceParameterButtonComponent).toBeDefined();

  // Check that the Save service button is there
  const SaveServiceButtonName = "Gem";
  const SaveServiceButtonNameRegex = new RegExp(SaveServiceButtonName, "i");

  const SaveServiceButton = getByText(SaveServiceButtonNameRegex);
  expect(SaveServiceButton).toBeDefined();

  // Check that the default button is used
  const SaveServiceButtonComponent = getByTestId(
    "DefaultButton - " + SaveServiceButtonName
  );
  expect(SaveServiceButtonComponent).toBeDefined();
});
