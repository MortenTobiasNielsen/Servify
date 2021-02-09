import React from "react";
import { render } from "@testing-library/react-native";

import EstimatePrice from "../EstimatePrice";

test("That the choose service screen is rendered correctly", () => {
  // @ts-ignore
  const { getByTestId } = render(<EstimatePrice />);

  // Check that the rendered screen is the start screen
  expect(getByTestId("EstimatePrice")).toBeDefined();
});
