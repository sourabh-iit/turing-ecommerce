import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


import { ProductActionTypes } from './../actions';
import { ProductService } from '../services/service';

@Injectable()
export class ProductionEffects {

  @Effect() loadDepartments$: Observable<Action> = this.actions$.pipe(
    ofType<any>(ProductActionTypes.loadDepartments),
    map(action => action.payload),
    switchMap((data) =>
      this.productService.loadDepartments(
      ).pipe(map(res =>
        ({ type: ProductActionTypes.addDepartments, payload: res})
      )
    ))
  );

  @Effect() loadCartItems$: Observable<Action> = this.actions$.pipe(
    ofType<any>(ProductActionTypes.loadCartItems),
    map(action => action.payload),
    switchMap((data) =>
      this.productService.loadCart(
      ).pipe(map(res =>
        ({ type: ProductActionTypes.addCartItems, payload: res})
      )
    ))
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {

  }
}
