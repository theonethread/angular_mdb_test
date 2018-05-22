import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../../app-routing.module';
import { RepoDetailsComponent } from '../../repo/repo-details/repo-details.component';
import { RepoIssueDetailsComponent } from '../../repo/repo-issue-details/repo-issue-details.component';
import { RepoIssueListComponent } from '../../repo/repo-issue-list/repo-issue-list.component';
import { RepoListComponent } from '../../repo/repo-list/repo-list.component';
import { RepoSearchComponent } from '../../repo/repo-search/repo-search.component';
import { PaginatedListComponent } from './paginated-list.component';

describe('PaginatedListComponent', () => {
  let component: PaginatedListComponent;
  let fixture: ComponentFixture<PaginatedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PaginatedListComponent,
        RepoSearchComponent,
        RepoListComponent,
        RepoIssueListComponent,
        RepoDetailsComponent,
        RepoIssueDetailsComponent
      ],
      imports: [
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
    fixture = TestBed.createComponent(PaginatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
