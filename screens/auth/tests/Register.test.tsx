import React from "react";
import { render } from "@testing-library/react-native";

import Register from "../Register";

test("That the register screen is rendered correctly", () => {
  // @ts-ignore
  const { getByTestId, getByText } = render(<Register />);

  // Check that the rendered screen is the start screen
  expect(getByTestId("Register")).toBeDefined();
});
