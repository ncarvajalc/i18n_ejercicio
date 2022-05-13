import React from "react";
import ReactDOM from "react-dom";
import JobsList from "./components/jobslist";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const lan = navigator.language || navigator.userLanguage;

const getLocale = () => {
  return lan === "en" ? localeEnMessages : localeEsMessages;
};
ReactDOM.render(
  <IntlProvider locale={lan} messages={getLocale()}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
