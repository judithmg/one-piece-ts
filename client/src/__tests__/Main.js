import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../redux/store/configureStore";
import Main from "../pages/Main";

describe("Given a Main component", () => {
  let container = null;
  const store = configureStore();

  beforeEach(() => {
    window.scrollTo = jest.fn();
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe("When it is invoked", () => {
    test("Then there should be a main section", () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <Main />
            </BrowserRouter>
          </Provider>,
          container
        );
      });
      const main = document.querySelector("main");
      expect(main).toBeTruthy();
    });
    test("Then CharacterList is called and there is a charlist article", () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <Main />
            </BrowserRouter>
          </Provider>,
          container
        );
      });
      const article = document.querySelector(".charlist");
      expect(article).toBeTruthy();
    });
  });
});
