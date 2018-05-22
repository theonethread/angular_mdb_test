import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoIssueDetailsComponent } from './repo-issue-details.component';

describe('RepoIssueDetailsComponent', () => {
  let component: RepoIssueDetailsComponent;
  let fixture: ComponentFixture<RepoIssueDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RepoIssueDetailsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoIssueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
