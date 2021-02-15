import React from "react";
import { render } from "@testing-library/react-native";

import DefaultDropdownInput from "../DefaultDropdownInput";

test("That the dropdown input list is rendered correctly", () => {
  const { getByText, getByTestId } = render(
    <DefaultDropdownInput></DefaultDropdownInput>
  );

  // Check that the component has an identifier
  expect(getByTestId("DefaultDropdownInput")).toBeDefined();
});
