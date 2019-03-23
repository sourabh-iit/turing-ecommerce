import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { EventService } from './events';

@Injectable()
export class AppError implements ErrorHandler {
  constructor(
    private msEvents: EventService
  ) { }

  handleError(err: any): void {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
        this.msEvents.error401.next(true);
        return void 0;
      }
      if (err.status === -1) {
        // We can ignore errors for when the user doesn't have internet connectivity.
        // Usually caused by a computer waking up from sleep and making a request before
        // network connected.
        return void 0;
      }

      let ref;
      const data = {
        url: err.url,
        status: err.status,
        statusText: err.statusText,
        data: (ref = err.message) != null ? ref.toString().substr(0, 2000) : void 0
      };
      console.log(err);
      if (err.status === 403) {
        this.msEvents.sdError.next({
          message: 'You don\'t have permission to perform this action.',
          header: 'Access Denied.'
        });
      } else if (err.status === 404 || err.status === 500) {
        this.msEvents.sdError.next({
          message: err.message,
          header: err.statusText
        });
      } else {
        let msg: string, header: string;
        if (err.status === 0) {
          msg = 'Looks like you are experiencing low or no internet connectivity - please check your connection';
          header = 'Connectivity issue';
        } else {
          msg = err.error;
          header = `An error has occurred`;
        }
        this.msEvents.sdError.next({
          message: msg,
          header: header
        });
      }

      if ('error' in console) {
        console.error(err.url + ' has failed with error ' + err.status + ' ' + err.statusText);
      }
    } else {
      if ('error' in console) {
        console.error(err);
      }
    }
  }
}
