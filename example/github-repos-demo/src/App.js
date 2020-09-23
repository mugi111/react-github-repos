import React from "react";
import GithubRepos from "react-github-repos";
import "./App.css";
import "react-github-repos/dist/index.css";

const props = [
  { owner: "mugi111", repo: "mugi111" },
  { owner: "mugi111", repo: "react-github-repos" },
  { owner: "mugi111", repo: "tweet-trigger-release" },
];

function App() {
  return (
    <div>
      <GithubRepos repoProps={props} />
    </div>
  );
}

export default App;
