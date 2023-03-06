import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SpecificBook from "../components/Specific-book";


const books = [
    {
      id: 1,
      author: "David Flanagan",
      price: 10.99,
      image: "https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@javascript_the_definitive_guide.jpg",
      title: "JavaScript: The Definitive Guide, 7th Edition",
      shortDescription: "JavaScript is the programming language of the web and is used by more software developers today than any other programming language.",
      description: "JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You’ll find illuminating and engaging example code throughout. This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js."
    }
  ];
const mockUseContext = jest.fn(() => books);

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => mockUseContext(),
}));


describe("SpecificBook", () => {
  test("increments count on clicking + button", async () => {
    const { getByTestId, getByText } = await render(<SpecificBook />);
    const incrementButton = getByTestId("plus");
    const countInput = getByText("1");

    fireEvent.click(incrementButton);

    expect(countInput).toHaveTextContent("2");
  });

  test("decrements count on clicking - button", async () => {
    const { getByTestId, getByText } = await render(<SpecificBook />);
    const decrementButton = getByTestId("minus");
    const countInput = getByText("2");

    fireEvent.click(decrementButton);

    expect(countInput).toHaveTextContent("1");
  });
});

