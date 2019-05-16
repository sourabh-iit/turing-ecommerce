import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventService {

  public error401: EventEmitter<boolean> = new EventEmitter();
  public sdError: EventEmitter<any> = new EventEmitter();
  public appLoaded: EventEmitter<boolean> = new EventEmitter();
  public loadProducts: EventEmitter<number> = new EventEmitter();

  public breadcrumb = new Subject();

  constructor() {

  }

  public setBreadcrumb(view, loaded = true, data = null) {
    this.breadcrumb.next({
      loaded: loaded,
      data: data
    });
  }
}
