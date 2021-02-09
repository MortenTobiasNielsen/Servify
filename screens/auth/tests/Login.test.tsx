import React from "react";
import { render } from "@testing-library/react-native";

import Login from "../Login";

test("That the login screen is rendered correctly", () => {
  // @ts-ignore
  const { getByTestId, getByText } = render(<Login />);

  // Check that the rendered screen is the start screen
  expect(getByTestId("Login")).toBeDefined();
});
