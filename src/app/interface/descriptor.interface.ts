export interface RepositoryDescriptor {
  id: number;
  owner: {
    id: number;
    login: string;
    type: string;
    html_url: string;
  };
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  open_issues_count: number;
  score: number;
  open?: boolean;
  selected?: boolean;
}

export interface IssueDescriptor {
  id: number;
  title: string;
  state: string;
  html_url: string;
  body: string;
  user: {
    id: number;
    login: string;
    type: string;
    html_url: string;
  };
  labels: {
    name: string
  }[];
  excerpt?: string;
  open?: boolean;
  selected?: boolean;
}

export interface DescriptorCollection<T> {
  total_count: number;
  items: T[];
  numPages: number;
  page: number;
  next: boolean;
  prev: boolean;
  error?: string;
  errorDescription?: string;
}
