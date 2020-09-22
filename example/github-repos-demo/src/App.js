import React from "react";
import GithubRepos from "react-github-repos";
import "./App.css";
import "react-github-repos/dist/index.css";

const props = [
  { owner: "mugi111", repos: "react-github-repos" },
  { owner: "mugi111", repos: "tweet-trigger-release" },
];

function App() {
  return (
    <div className="App">
      <GithubRepos repoProps={props} />
    </div>
  );
}

export default App;
