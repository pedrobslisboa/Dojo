import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { App } from "../App";

test("loads and displays greeting", async () => {
  render(<App />);

  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
