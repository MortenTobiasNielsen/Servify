import React from "react";
import { render } from "@testing-library/react-native";

import ServiceProviderDetails from "../ServiceProviderDetails";

test("That the choose service screen is rendered correctly", () => {
  // @ts-ignore
  const { getByTestId } = render(<ServiceProviderDetails />);

  // Check that the rendered screen is the start screen
  expect(getByTestId("ServiceProviderDetails")).toBeDefined();
});
