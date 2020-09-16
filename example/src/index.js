import React from "react";
import ReactDOM from "react-dom";
import GithubRepos from "react-github-repos";

class App extends React.Component {
  render() {
    console.log("useEffect");
    return (
      <div>
        <GithubRepos owner="mugi111" repo="react-github-repos" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
