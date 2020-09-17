import React from "react";
import ReactDOM from "react-dom";
import GithubRepos from "../../dist/index";

const App = () => {
  return (
    <div>
      <GithubRepos owner="mugi111" repo="react-github-repos" / >
    </div>
  )
}

ReactDOM.render(<App/> , document.getElementById("root"));