import { APP_BASE_HREF } from '@angular/common';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoDetailsComponent } from './component/repo/repo-details/repo-details.component';
import { RepoIssueDetailsComponent } from './component/repo/repo-issue-details/repo-issue-details.component';
import { RepoIssueListComponent } from './component/repo/repo-issue-list/repo-issue-list.component';
import { RepoListComponent } from './component/repo/repo-list/repo-list.component';
import { RepoSearchComponent } from './component/repo/repo-search/repo-search.component';
import { PaginatedListComponent } from './component/shared/paginated-list/paginated-list.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
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
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have the title 'GitHub Lister'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('GitHub Lister');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('[ GitHub Lister Application ]');
  }));
});
