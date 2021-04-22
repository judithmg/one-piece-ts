import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { Provider } from "react-redux";
import store from "./redux/store/configureStore";
import { ThemeProvider } from "./components/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store()}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
