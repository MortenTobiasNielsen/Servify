import React from "react";
import { render } from "@testing-library/react-native";

import DefaultTitle from "../DefaultTitle";

test("That the title component render correctly", () => {
  const titleToBeSet = "Testing that this works";

  const { getByText } = render(<DefaultTitle>{titleToBeSet}</DefaultTitle>);

  const title = getByText(titleToBeSet);
  expect(title).toBeDefined();
});
