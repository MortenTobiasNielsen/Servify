import React from "react";
import { render } from "@testing-library/react-native";

import DefaultText from "../DefaultText";

test("That the default title component render correctly", () => {
  const TextToBeSet = "Testing that this works";

  const { getByText, getByTestId } = render(
    <DefaultText>{TextToBeSet}</DefaultText>
  );

  // Check that the title is set correctly
  const text = getByText(TextToBeSet);
  expect(text).toBeDefined();

  // Check that the component has the right test id
  const textTestId = getByTestId("DefaultTitle - " + TextToBeSet);
  expect(textTestId).toBeDefined();
});
