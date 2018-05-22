import { RepositoryDescriptor, IssueDescriptor } from '../interface/descriptor.interface';

export const REPOSITORIES_MOCK: RepositoryDescriptor[]  = [
  {
    id: 0,
    owner: {
      id: 0,
      login: 'Barnabas',
      type: 'Demigod',
      html_url: 'http://retek.hu'
    },
    name: 'project0',
    full_name: 'Barnabas/project0',
    description: 'project0 description',
    html_url: 'http://retek.hu#Barnabas/project0',
    forks_count: 0,
    stargazers_count: 0,
    watchers_count: 0,
    open_issues_count: 0,
    score: 1.5
  },
  {
    id: 1,
    owner: {
      id: 0,
      login: 'Barnabas',
      type: 'Demigod',
      html_url: 'http://retek.hu'
    },
    name: 'project1',
    full_name: 'Barnabas/project0',
    description: 'project1 description',
    html_url: 'http://retek.hu#Barnabas/project1',
    forks_count: 0,
    stargazers_count: 0,
    watchers_count: 0,
    open_issues_count: 0,
    score: 1.5
  },
  {
    id: 2,
    owner: {
      id: 0,
      login: 'Barnabas',
      type: 'Demigod',
      html_url: 'http://retek.hu'
    },
    name: 'project0',
    full_name: 'Barnabas/project2',
    description: 'project2 description',
    html_url: 'http://retek.hu#Barnabas/project2',
    forks_count: 0,
    stargazers_count: 0,
    watchers_count: 0,
    open_issues_count: 0,
    score: 1.5
  }
];

export const ISSUES_MOCK: IssueDescriptor[] = [
  {
    id: 0,
    title: 'issue0',
    state: 'open',
    user: {
      id: 0,
      login: 'barnabas',
      type: 'Admin',
      html_url: 'http://retek.hu#barnabas'
    },
    html_url: 'http://retek.hu#issue0',
    body: 'body of issue0',
    labels: []
  },
  {
    id: 1,
    title: 'issue1',
    state: 'open',
    user: {
      id: 0,
      login: 'barnabas',
      type: 'Admin',
      html_url: 'http://retek.hu#barnabas'
    },
    html_url: 'http://retek.hu#issue2',
    body: 'body of issue1',
    labels: []
  },
  {
    id: 2,
    title: 'issue2',
    state: 'open',
    user: {
      id: 0,
      login: 'barnabas',
      type: 'Admin',
      html_url: 'http://retek.hu#barnabas'
    },
    html_url: 'http://retek.hu#issue2',
    body: 'body of issue2',
    labels: []
  },
];

export const ERROR_MOCK: IssueDescriptor[] = [

];
