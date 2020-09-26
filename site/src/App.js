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
    <div className="content-page content-background">
      <header>
        <h1>React Github Repos</h1>
      </header>
      <div className="content about">
        <h2>About</h2>
        <span>Githubのpinned欄みたいにリポジトリを表示するコンポーネント</span>
        <br />
        <br />
        <span className="attension">
          GithubのAPIの仕様上、同一IPから60回/1時間
          以上叩かれると情報が取得できなくなります。
        </span>
      </div>
      <div className="content link">
        <h3>Link</h3>
        <a href="https://github.com/mugi111/react-github-reposnpm">Github</a>
        <br />
        <a href="https://www.npmjs.com/package/react-github-repos">
          NPM package
        </a>
      </div>
      <div className="content usage">
        <h2>Usage</h2>
        <h3>Install</h3>
        <code className="code-bg">yarn add react-github-repos</code>
        <code className="code-bg">npm i react-github-repos</code>
        <h3>Code</h3>
        <pre>
          <code className="code-bg">
            {`import React from "react";
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

export default App;`}
          </code>
        </pre>
      </div>
      <div className="content example">
        <h2>Example</h2>
        <div className="example-box">
          <div>
            <GithubRepos repoProps={props} />
          </div>
        </div>
      </div>
      <footer className="footer">© 2020 mugi111</footer>
    </div>
  );
}

export default App;
