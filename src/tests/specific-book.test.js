import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SpecificBook from "../components/Specific-book";

describe("SpecificBook", () => {
  test("increments count on clicking + button", () => {
    const { getByTestId, getByText } = render(<SpecificBook />);
    const incrementButton = getByTestId("plus");
    const countInput = getByText("1");

    fireEvent.click(incrementButton);

    expect(countInput).toHaveTextContent("2");
  });

  test("decrements count on clicking - button", () => {
    const { getByTestId, getByText } = render(<SpecificBook />);
    const decrementButton = getByTestId("minus");
    const countInput = getByText("1");

    fireEvent.click(decrementButton);

    expect(countInput).toHaveTextContent("1");
  });
});
