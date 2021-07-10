import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import Landing from "./view/landing/Landing";
import "./resources/i18n";
import Layout from "./component/Layout";
import RegisterWizard from "./view/register/RegisterWizard";
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
        <Layout>
          <Switch>
            <Route component={RegisterWizard} path="/grazie/:id" />
            <Route component={Landing} path="/" />
          </Switch>
        </Layout>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
