import React from "react";
import { render } from "@testing-library/react-native";

import ServiceProviderProfile from "../ServiceProviderProfile";

test("That the Service Provider Profile screen is rendered correctly", () => {
  // @ts-ignore
  const { getByTestId, getByText } = render(<ServiceProviderProfile />);

  // Check that a scroll view is present
  expect(getByTestId("ScrollView")).toBeDefined();

  // Check that the Choose logo component is present
  expect(getByTestId("DefaultChooseLogo")).toBeDefined();

  // Check that the service list title is present
  // and the default title is used
  expect(getByText(/Services/i)).toBeDefined();
  expect(getByTestId(/DefaultTitle - Services/i)).toBeDefined();

  // Check that the add button is present
  // and the default add button is used
  expect(getByTestId(/DefaultButton - Add/));
});
