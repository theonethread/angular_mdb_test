import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DescriptorCollection, IssueDescriptor } from '../../../interface/descriptor.interface';
import { RepoDataService } from '../../../service/repo-data.service';

@Component({
  selector: 'app-repo-issue-list',
  templateUrl: './repo-issue-list.component.html'
})
export class RepoIssueListComponent implements OnInit, OnDestroy {
  private _sub;

  search: string;
  searchPage: string;
  repo: string;
  urlSegments: (string | number)[];
  show: boolean;
  data: DescriptorCollection<IssueDescriptor>;

  constructor(
    private _route: ActivatedRoute,
    private _repoService: RepoDataService
  ) {}

  ngOnInit() {
    this.search = this._route.snapshot.paramMap.get('search');
    this.searchPage = this._route.snapshot.paramMap.get('searchPage');
    this.repo = this._route.snapshot.paramMap.get('repo');
    this.urlSegments = ['/issue_list', this.search, this.searchPage, this.repo];

    this._sub = this._route.params.subscribe(_ => this.fetchData());
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  toggleItem(item: IssueDescriptor) {
    this.data.items.forEach(i => {
      if (i === item) {
        i.open = !i.open;
        i.selected = i.open;
      } else {
        i.open = i.selected = false;
      }
    });
  }

  fetchData() {
    this.show = false;

    const page = parseInt(this._route.snapshot.paramMap.get('page'), 10);
    this._repoService
      .getIssues(this.repo, page)
      .subscribe(data => {
        this.data = data;
        this.show = true;
      });
  }
}
