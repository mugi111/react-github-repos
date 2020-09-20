import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import { ReposName, Description, Language, Star } from "./Components";
import { ReposProps, Root } from "./Types";

class GithubRepos extends React.Component<ReposProps, Root> {
  constructor(props: ReposProps) {
    super(props);
    this.state = {
      reposName: { name: "repos", url: "repos" },
      description: { body: "repos" },
      language: { name: "go" },
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
      <div>
        <div>
          <ReposName
            name={this.state.reposName!.name}
            url={this.state.reposName!.url}
          ></ReposName>
          <Description body={this.state.description!.body}></Description>
          <Language name={this.state.language!.name}></Language>
          <Star
            count={this.state.stargazer!.count}
            url={this.state.stargazer!.url}
          ></Star>
        </div>
      </div>
    );
  }
}

export default GithubRepos;
