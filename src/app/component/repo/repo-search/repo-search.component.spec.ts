import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../../app-routing.module';
import { PaginatedListComponent } from '../../shared/paginated-list/paginated-list.component';
import { RepoDetailsComponent } from '../repo-details/repo-details.component';
import { RepoIssueDetailsComponent } from '../repo-issue-details/repo-issue-details.component';
import { RepoIssueListComponent } from '../repo-issue-list/repo-issue-list.component';
import { RepoListComponent } from '../repo-list/repo-list.component';
import { RepoSearchComponent } from './repo-search.component';

describe('RepoSearchComponent', () => {
  let component: RepoSearchComponent;
  let fixture: ComponentFixture<RepoSearchComponent>;

  beforeEach(async(() => {
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
        AppRoutingModule,
        FormsModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/search'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
