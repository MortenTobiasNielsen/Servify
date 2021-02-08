import React from "react";
import { render } from "@testing-library/react-native";

import ChooseService from "../ChooseService";

test("That the choose service screen is rendered correctly", () => {
  const { getByTestId } = render(<ChooseService />);

  // Check that the rendered screen is the start screen
  expect(getByTestId("ChooseService")).toBeDefined();
});
