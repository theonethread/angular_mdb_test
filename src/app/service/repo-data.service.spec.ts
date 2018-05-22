import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { PaginatedListComponent } from '../component/shared/paginated-list/paginated-list.component';
import { RepoDataService } from './repo-data.service';
import { RepoDetailsComponent } from '../component/repo/repo-details/repo-details.component';
import { RepoIssueDetailsComponent } from '../component/repo/repo-issue-details/repo-issue-details.component';
import { RepoListComponent } from '../component/repo/repo-list/repo-list.component';
import { RepoSearchComponent } from '../component/repo/repo-search/repo-search.component';
import { RepoIssueListComponent } from '../component/repo/repo-issue-list/repo-issue-list.component';

describe('RepoDataService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RepoSearchComponent,
        RepoListComponent,
        RepoIssueListComponent,
        PaginatedListComponent,
        RepoDetailsComponent,
        RepoIssueDetailsComponent
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        AppRoutingModule
      ],
      providers: [
        RepoDataService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    });
  });

  it('should be created', inject([RepoDataService], (service: RepoDataService) => {
    expect(service).toBeTruthy();
  }));
});
