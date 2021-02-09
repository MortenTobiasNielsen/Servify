import React from "react";
import { render } from "@testing-library/react-native";

import ChooseServiceProvider from "../ChooseServiceProvider";

test("That the choose service provider screen is rendered correctly", () => {
  // @ts-ignore
  const { getByTestId } = render(<ChooseServiceProvider />);

  // Check that the rendered screen is the start screen
  expect(getByTestId("ChooseServiceProvider")).toBeDefined();
});
