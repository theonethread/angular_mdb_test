import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RepoSearchComponent } from './component/repo/repo-search/repo-search.component';
import { RepoListComponent } from './component/repo/repo-list/repo-list.component';
import { RepoIssueListComponent } from './component/repo/repo-issue-list/repo-issue-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: 'search', component: RepoSearchComponent},
  {path: 'search/:search', redirectTo: 'repo_list/:search/1'},
  {path: 'repo_list/:search/:page', component: RepoListComponent},
  {path: 'repo_list/:search', redirectTo: 'repo_list/:search/1'},
  {path: 'issue_list/:search/:searchPage/:repo/:page', component: RepoIssueListComponent},
  {path: 'issue_list/:search/:searchPage/:repo', redirectTo: 'issue_list/:search/:searchPage/:repo/1'},
  {path: '**', redirectTo: '/search'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
