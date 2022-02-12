import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

import store from "config/create-store";
import App from "./App";
import "./index.css";
import "antd/dist/antd.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
