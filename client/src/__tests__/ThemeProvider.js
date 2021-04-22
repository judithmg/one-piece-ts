import React, { useContext } from "react";
import "@testing-library/jest-dom/extend-expect";
import { renderHook, act } from "@testing-library/react-hooks";

import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider, ThemeContext } from "../components/ThemeProvider";

describe("Given a ThemeProvider", () => {
  describe("When it is invoked", () => {
    test("should render its children surronded by a Provider", () => {
      render(
        <ThemeProvider>
          <h2>Hello</h2>
        </ThemeProvider>
      );
      screen.getByText("Hello");
    });
  });
  describe("When a button has a toggleTheme function", () => {
    test("should call toggleTheme clicked", () => {
      const useContext = (React.useContext = jest.fn());
      useContext.mockReturnValueOnce(ThemeContext);
      const toggleTheme = useContext.mockReturnValueOnce(jest.fn());

      render(
        <ThemeProvider>
          <button type="button" onClick={() => toggleTheme()}>
            Hello
          </button>
        </ThemeProvider>
      );
      const btn = screen.getByRole("button");

      fireEvent.click(btn);
      expect(toggleTheme).toHaveBeenCalled();
    });
  });
  test("should change the context if clicked", () => {
    const wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;
    const { result } = renderHook(() => useContext(ThemeContext), { wrapper });
    act(() => {
      result.current.toggleTheme();
    });
  });
});
