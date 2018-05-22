import { NgForOfContext } from '@angular/common';
import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { DescriptorCollection } from '../../../interface/descriptor.interface';

@Component({
  selector: 'app-paginated-list',
  templateUrl: './paginated-list.component.html'
})
export class PaginatedListComponent {

  constructor (
    private _router: Router
  ) {}

  @ContentChild(TemplateRef)
  template: TemplateRef<NgForOfContext<DescriptorCollection<any>>>;

  @Input()
  data: DescriptorCollection<any>;

  @Input()
  urlSegments: (string | number)[];

  @Input()
  show: string;
}
