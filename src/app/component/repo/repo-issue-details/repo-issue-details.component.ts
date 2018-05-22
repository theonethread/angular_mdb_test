import { Component, Input } from '@angular/core';

import { IssueDescriptor } from '../../../interface/descriptor.interface';

@Component({
  selector: 'app-repo-issue-details',
  templateUrl: './repo-issue-details.component.html'
})
export class RepoIssueDetailsComponent {

  @Input()
  issue: IssueDescriptor;

  get labels(): string {
    return this.issue.labels.reduce((a, i) => a + ', ' + i.name, '').substr(2);
  }

  hide() {
    this.issue.open = false;
    // TODO: change to animation
    setTimeout(() => this.issue.selected = this.issue.open, 2500);
  }
}
