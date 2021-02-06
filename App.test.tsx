import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import App from "./App";

test("Ensure that navigation is available", async () => {
  const { debug } = render(<App />);
  console.log(await waitFor(() => debug()));
});
