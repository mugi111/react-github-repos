import React from 'react';
import GithubRepos from "react-github-repos";
import './App.css';

function App() {
  return (
    <div className="App">
      <GithubRepos owner="mugi111" repo="react-github-repos" />
    </div>
  );
}

export default App;
