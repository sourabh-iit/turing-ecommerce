import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'statusText'})
export class StatusTextPipe implements PipeTransform {
  transform(value: number): string {
    const statusMap = {
      0: 'Delivery Details',
      1: 'Order Summary',
      2: 'Payment Details',
      3: 'Order Placed',
      4: 'Item(s) packed',
      5: 'Ready to be shipped',
      6: '',
      7: 'Shipped',
      8: 'Delivered'
    }
    return statusMap[value];
  }
}