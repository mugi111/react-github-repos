import React from "react";
import { Octokit } from "@octokit/rest";
import { ReposName, Description, Language, Star } from "./Components";
import { ReposProps, RepoProps, Root } from "./Types";
import "./Styles/index.scss";

export class GithubRepo extends React.Component<RepoProps, Root> {
  constructor(props: RepoProps) {
    super(props);
    this.state = {
      reposName: { name: "reposName", url: "reposUrl" },
      description: { body: "description" },
      language: { name: "C" },
      stargazer: {
        count: 200,
        url: "repos",
      },
    };
  }

  componentDidMount() {
    const octokit = new Octokit();
    octokit.repos
      .get({
        owner: this.props.owner,
        repo: this.props.repo,
      })
      .then((result) => {
        this.setState({
          reposName: { name: result.data.name, url: result.data.html_url },
          description: { body: result.data.description },
          language: { name: result.data.language },
          stargazer: {
            count: result.data.stargazers_count,
            url: result.data.stargazers_url,
          },
        });
      });
  }

  render() {
    return (
      <div className="github-repos-item github-repos-box">
        <div className="github-repos-content">
          <ReposName
            name={this.state.reposName!.name}
            url={this.state.reposName!.url}
          ></ReposName>
          <Description body={this.state.description!.body}></Description>
          <p className="github-repos-language-p">
            <Language name={this.state.language!.name}></Language>
            <Star
              count={this.state.stargazer!.count}
              url={this.state.stargazer!.url}
            ></Star>
          </p>
        </div>
      </div>
    );
  }
}

export default class GithubRepos extends React.Component<ReposProps> {
  constructor(props: ReposProps) {
    super(props);
  }

  render() {
    return (
      <ol className="github-repos-ol">
        {this.props.repoProps.map((repoProps) => {
          return (
            <li className="github-repos-li">
              <GithubRepo owner={repoProps.owner} repo={repoProps.repo} />
            </li>
          )
        })}
      </ol>
    );
  }
}
