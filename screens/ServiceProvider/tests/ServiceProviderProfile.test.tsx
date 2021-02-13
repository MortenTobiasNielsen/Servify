import React from "react";
import { render } from "@testing-library/react-native";

import ServiceProviderProfile from "../ServiceProviderProfile";

test("That the Service Provider Profile screen is rendered correctly", () => {
  // @ts-ignore
  const { getByTestId, getByText } = render(<ServiceProviderProfile />);

  // Check that the rendered screen is the service to provide
  expect(getByTestId("ServiceProviderProfile")).toBeDefined();

  // Check that a scroll view is present
  expect(getByTestId("ScrollView")).toBeDefined();

  //

  // // Check that the choose Logo button is there
  // const ChooseServiceButtonName = "Tilføj";
  // const ChooseServiceButtonNameRegex = new RegExp(ChooseServiceButtonName, "i");

  // const ChooseServiceButton = getByText(ChooseServiceButtonNameRegex);
  // expect(ChooseServiceButton).toBeDefined();

  //   // Check that the default button is used
  //   const ChooseServiceButtonComponent = getByTestId(
  //     "DefaultButton - " + ChooseServiceButtonName
  //   );
  //   expect(ChooseServiceButtonComponent).toBeDefined();

  //   // Check that the new service button is there
  //   const NewServiceButtonName = "Udbyd Ny Service";
  //   const NewServiceButtonNameRegex = new RegExp(NewServiceButtonName, "i");

  //   const NewServiceButton = getByText(NewServiceButtonNameRegex);
  //   expect(NewServiceButton).toBeDefined();

  //   // Check that the default button is used
  //   const NewServiceButtonComponent = getByTestId(
  //     "DefaultButton - " + NewServiceButtonName
  //   );
  //   expect(NewServiceButtonComponent).toBeDefined();
});
