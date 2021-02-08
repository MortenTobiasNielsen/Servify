import React from "react";
import { render } from "@testing-library/react-native";

import DefaultButton from "../DefaultButton";

test("That the default button component renders correctly", () => {
  const TestingButtonName = "Testing that it works";
  const { getByText, getByTestId } = render(
    <DefaultButton onPress={() => {}}>{TestingButtonName}</DefaultButton>
  );

  // Check that the button name is correct
  const buttonName = getByText(TestingButtonName);
  expect(buttonName).toBeDefined();

  // Check that the component has the right test id
  const buttonTestId = getByTestId("DefaultButton - " + TestingButtonName);
  expect(buttonTestId).toBeDefined();
});
