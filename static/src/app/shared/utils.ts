import { Params, Data, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * The RouterStateSerializer takes the current RouterStateSnapshot
 * and returns any pertinent information needed. The snapshot contains
 * all information about the state of the router at the given point in time.
 * The entire snapshot is complex and not always needed. In this case, you only
 * need the URL and query parameters from the snapshot in the store. Other items could be
 * returned such as route parameters and static route data.
 */

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
  data: Data;
}

export class CustomRouterStateSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }
    const data = route.data;
    const { url, root: { queryParams } } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams, data };
  }
}

export const skipNil = (obs$: Observable<any>): Observable<any> =>
  obs$.pipe(filter(v => v !== null && v !== undefined));

export function getPrice(item: CartItem){
  let price;
  if(parseFloat(item.product.discounted_price)>0)
    price = parseFloat(item.product.discounted_price);
  else
    price = parseFloat(item.product.price);
  return (item.quantity*price).toFixed(2);
}

export function totalPrice(cartItems: CartItem[]){
  let price = 0;
  for(let item of cartItems.filter(item => item.buy_now)){
    if(parseFloat(item.product.discounted_price)>0)
      price += parseFloat(item.product.discounted_price)*item.quantity;
    else
      price += parseFloat(item.product.price)*item.quantity;
  }
  return price.toFixed(2);
}

export function joinAttributes(cartItem: CartItem) {
  let attributes = [];
  let attribute_values = [];
  for(let attribute_name in cartItem.attributes){
    attributes.push(attribute_name);
    attribute_values.push(cartItem.attributes[attribute_name].value);
  }
  return attributes.join('/')+': '+attribute_values.join('/');
}

