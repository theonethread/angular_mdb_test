import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html'
})
export class RepoSearchComponent {
  searchString: string;
  errorMessage: string;

  @Input()
  placeholder: string;

  constructor(
    private _router: Router
  ) {}

  search() {
    if (this.searchString && this.searchString.length > 2) {
      this._router.navigate(['/repo_list/', this.searchString, 1]);

      this.searchString = '';
      this.errorMessage = undefined;
    } else {
      this.errorMessage = 'Invalid search term.';
    }
  }
}
