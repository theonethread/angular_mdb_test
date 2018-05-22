import { Component, Input } from '@angular/core';

import { RepositoryDescriptor } from '../../../interface/descriptor.interface';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html'
})
export class RepoDetailsComponent {

  @Input()
  search: string;

  @Input()
  repo: RepositoryDescriptor;

  @Input()
  page: number;

  hide() {
    this.repo.open = false;
    // TODO: change to animation
    setTimeout(() => this.repo.selected = this.repo.open, 2500);
  }

  issueGraph() {
    console.log('TODO: issue graph for', this.repo.id);
  }
}
