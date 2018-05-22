import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../../app-routing.module';
import { PaginatedListComponent } from '../../shared/paginated-list/paginated-list.component';
import { RepoDataService } from '../../../service/repo-data.service';
import { RepoDetailsComponent } from '../repo-details/repo-details.component';
import { RepoIssueDetailsComponent } from '../repo-issue-details/repo-issue-details.component';
import { RepoListComponent } from '../repo-list/repo-list.component';
import { RepoSearchComponent } from '../repo-search/repo-search.component';

import { RepoIssueListComponent } from './repo-issue-list.component';

describe('RepoIssueListComponent', () => {
  let component: RepoIssueListComponent;
  let fixture: ComponentFixture<RepoIssueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RepoIssueListComponent,
        RepoSearchComponent,
        PaginatedListComponent,
        RepoIssueDetailsComponent,
        RepoListComponent,
        RepoDetailsComponent
      ],
      imports: [
        AppRoutingModule,
        HttpClientModule,
        FormsModule
      ],
      providers: [
        RepoDataService,
        {provide: APP_BASE_HREF, useValue: '/search'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoIssueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
