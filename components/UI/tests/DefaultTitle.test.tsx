import React from "react";
import { render } from "@testing-library/react-native";

import DefaultTitle from "../DefaultTitle";

test("That the title component render correctly", () => {
  const titleToBeSet = "Testing that this works";

  const { getByText, getByTestId } = render(
    <DefaultTitle>{titleToBeSet}</DefaultTitle>
  );

  // Check that the title is set correctly
  const title = getByText(titleToBeSet);
  expect(title).toBeDefined();

  // Check that the component has the right test id
  const titleTestId = getByTestId("DefaultTitle");
  expect(titleTestId).toBeDefined();
});
