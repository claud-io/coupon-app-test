import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Landing from "./view/landing/Landing";
import "./resources/i18n";

const queryClient = new QueryClient();

axios.interceptors.response.use((response) => response.data);

const Router: React.FC = ({ children }) => {
  if (import.meta.env.MODE === "development") {
    return <HashRouter>{children}</HashRouter>;
  } else {
    return <BrowserRouter>{children}</BrowserRouter>;
  }
};

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route component={Landing} path="/" />
        </Switch>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
