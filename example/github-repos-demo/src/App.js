import React from 'react';
import GethubRepos from "react-github-repos";
import './App.css';

function App() {
  return (
    <div className="App">
      <GethubRepos owner="mugi111" repo="react-github-repos" />
    </div>
  );
}

export default App;
