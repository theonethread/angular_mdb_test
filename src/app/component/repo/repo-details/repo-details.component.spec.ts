import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../../app-routing.module';
import { PaginatedListComponent } from '../../shared/paginated-list/paginated-list.component';
import { RepoIssueDetailsComponent } from '../repo-issue-details/repo-issue-details.component';
import { RepoIssueListComponent } from '../repo-issue-list/repo-issue-list.component';
import { RepoListComponent } from '../repo-list/repo-list.component';
import { RepoSearchComponent } from '../repo-search/repo-search.component';
import { RepoDetailsComponent } from './repo-details.component';

describe('RepoDetailsComponent', () => {
  let component: RepoDetailsComponent;
  let fixture: ComponentFixture<RepoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RepoDetailsComponent,
        RepoSearchComponent,
        RepoListComponent,
        RepoIssueListComponent,
        PaginatedListComponent,
        RepoIssueDetailsComponent
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        AppRoutingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/search'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
