export type ReposProps = {
  owner: string;
  repo: string;
};

export type ReposNameProps = {
  name: string;
  url: string;
};

export type DescProps = {
  body: string;
};

export type LangProps = {
  name: string;
};

export type StarProps = {
  count: number;
  url: string;
};

export type Root = {
  reposName: ReposNameProps;
  description: DescProps;
  language: LangProps;
  stargazer: StarProps;
};
