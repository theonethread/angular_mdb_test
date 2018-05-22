import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DescriptorCollection, RepositoryDescriptor } from '../../../interface/descriptor.interface';
import { RepoDataService } from '../../../service/repo-data.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html'
})
export class RepoListComponent implements OnInit, OnDestroy {
  private _sub;

  search: string;
  searchDisplay: string;
  urlSegments: (string | number)[];
  page: number;
  show: boolean;
  data: DescriptorCollection<RepositoryDescriptor>;

  constructor(
    private _route: ActivatedRoute,
    private _repoService: RepoDataService
  ) {}

  ngOnInit() {
    this._sub = this._route.params.subscribe(_ => this.fetchData());
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  toggleItem(item: RepositoryDescriptor) {
    this.data.items.forEach(i => {
      if (i === item) {
        i.open = !i.open;
        i.selected = i.open;
      } else {
        i.open = i.selected = false;
      }
    });
  }

  private fetchData() {
    this.show = false;

    this.search = this._route.snapshot.paramMap.get('search');
    this.urlSegments = ['/repo_list/', this.search];
    this.searchDisplay = decodeURIComponent(this.search);
    this.page = parseInt(this._route.snapshot.paramMap.get('page'), 10);

    this._repoService
      .getRepositories(this.search, this.page)
      .subscribe(data => {
        this.data = data;
        this.show = true;
      });
  }
}
