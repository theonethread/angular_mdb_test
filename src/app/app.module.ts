import { DOCUMENT } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RepoListComponent } from './component/repo/repo-list/repo-list.component';
import { RepoDetailsComponent } from './component/repo/repo-details/repo-details.component';
import { RepoSearchComponent } from './component/repo/repo-search/repo-search.component';
import { RepoDataService } from './service/repo-data.service';
import { PaginatedListComponent } from './component/shared/paginated-list/paginated-list.component';
import { RepoIssueListComponent } from './component/repo/repo-issue-list/repo-issue-list.component';
import { RepoIssueDetailsComponent } from './component/repo/repo-issue-details/repo-issue-details.component';
import { ClearDoubleSelectionDirective } from './directive/clear-dbl-selection.directive';

@NgModule({
  declarations: [
    AppComponent,
    PaginatedListComponent,
    RepoSearchComponent,
    RepoListComponent,
    RepoDetailsComponent,
    RepoIssueListComponent,
    RepoIssueDetailsComponent,
    ClearDoubleSelectionDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    RepoDataService,
    {provide: DOCUMENT, useValue: document}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
