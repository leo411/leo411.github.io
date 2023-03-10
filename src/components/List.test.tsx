import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "./List";

describe("List", () => {
  test("renders a list of damages", () => {
    const damageAtSlotLevel = {
      "2": "two",
      "3": "three",
      "4": "four",
      "5": "five",
      "6": "six",
      "7": "seven",
      "8": "eight",
      "9": "nine",
    };

    render(<List {...{ damageAtSlotLevel }} />);
    expect(screen.getByTestId("damage2")).toHaveTextContent("ð¥two ð¥");
    expect(screen.getByTestId("damage3")).toHaveTextContent("three ð¥");
    expect(screen.getByTestId("damage4")).toHaveTextContent("four ð¥");
    expect(screen.getByTestId("damage5")).toHaveTextContent("five ð¥");
    expect(screen.getByTestId("damage6")).toHaveTextContent("six ð¥");
    expect(screen.getByTestId("damage7")).toHaveTextContent("seven ð¥");
    expect(screen.getByTestId("damage8")).toHaveTextContent("eight ð¥");
    expect(screen.getByTestId("damage9")).toHaveTextContent("nine");
  });
});
