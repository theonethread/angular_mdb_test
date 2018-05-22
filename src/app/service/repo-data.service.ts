import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';

import { DescriptorCollection, IssueDescriptor, RepositoryDescriptor } from '../interface/descriptor.interface';

enum Hub {
  HOST = 'https://api.github.com/search/',
  REPO = 'repositories?q=',
  ISSUES = 'issues?q=repo:',
  SORT = '&sort=stars',
  PAGE = '&page=',
  OPEN = ' state:open'
}

@Injectable()
export class RepoDataService {
  private readonly _defaultCollection: DescriptorCollection<any> = {
    total_count: 0,
    page: 0,
    numPages: 0,
    items: [],
    next: false,
    prev: false
  };
  private readonly _headers = new HttpHeaders({'Accept': 'application/vnd.github.v3+json'});
  private readonly _maxBodyLength = 300;

  constructor(
    private _http: HttpClient
  ) {}

  getRepositories(searchTerm: string, page = 1): Observable<DescriptorCollection<RepositoryDescriptor>> {
    return this._http.get<DescriptorCollection<RepositoryDescriptor>>(
      this.getRepoQueryUrl(searchTerm, page),
      // NOTE: can not use a predefined object here, Angular & TypeScript issue
      {
        headers: this._headers,
        observe: 'response'
      }
    )
      .pipe(
        map(res => {
          return this.convertResult<RepositoryDescriptor>(res, page);
        }),
        catchError(this.onError('getRepositories', this._defaultCollection))
      );
  }

  getIssues(repo: string, page = 1): Observable<DescriptorCollection<IssueDescriptor>> {
    return this._http.get<DescriptorCollection<IssueDescriptor>>(
      this.getIssuesQueryUrl(repo, page),
      // NOTE: can not use a predefined object here, Angular & TypeScript issue
      {
        headers: this._headers,
        observe: 'response'
      }
    )
      .pipe(
        map(res => {
          const result =  this.convertResult<IssueDescriptor>(res, page);
          result.items.forEach(i => {
            if (i.body) {
              if (i.body.length > this._maxBodyLength) {
                i.excerpt = i.body.substr(0, this._maxBodyLength).replace(/\s*[^\s]*$/, '...');
              } else {
                i.excerpt = i.body;
              }
            } else {
              i.body = i.excerpt = '';
            }
          });
          return result;
        }),
        catchError(this.onError('getIssues', this._defaultCollection))
      );
  }

  private getRepoQueryUrl(searchTerm: string, page: number, stars: boolean = false) {
    return Hub.HOST + Hub.REPO + searchTerm + Hub.PAGE + page + (stars ? Hub.SORT : '');
  }

  private getIssuesQueryUrl(repo: string, page: number, open: boolean = true) {
    return Hub.HOST + Hub.ISSUES + repo + (open ? Hub.OPEN : '') + Hub.PAGE + page;
  }

  private convertResult<T>(res: HttpResponse<DescriptorCollection<T>>, page: number): DescriptorCollection<T> {
    // TODO: convert res.body's keys
    const result: DescriptorCollection<T> = res.body;
    result.next = false;
    result.prev = false;
    result.numPages = page;
    result.page = page;

    const links: string = res.headers.get('link');
    if (links) {
      links.split(',').forEach(link => {
        const match = link.match(/<(.*?)>; rel="(.*?)"/);
        if (match) {
          switch (match[2]) {
            case 'next':
              result.next = true;
              break;
            case 'prev':
              result.prev = true;
              break;
            case 'last':
              result.numPages = parseInt(match[1].match(/&page=(\d+)/)[1], 10);
              break;
          }
        }
      });
    }
    return result;
  }

  private onError<T>(operation: string, data: DescriptorCollection<T>) {
    return (error: HttpErrorResponse): Observable<DescriptorCollection<T>> => {
      console.log(operation, '>', error);
      data.error = error.message;
      data.errorDescription = error.error.message ? error.error.message : error.statusText;
      return of(data) as Observable<DescriptorCollection<T>>;
    };
  }
}
