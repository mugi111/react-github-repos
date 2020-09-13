import React from "react";
import { render } from "react-dom";
import GithubRepos from "../../dist";

render(
  <GithubRepos owner="github" repo="rest.js" />,
  document.getElementById("root")
);
