import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AppSettings } from 'src/app/app.constant';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import * as rootActions from '../../../core/actions/user';
import * as fromRoot from '../../../core/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html'
})
export class ProfileComponent implements OnInit, OnDestroy {

  public STATIC_URL: string;
  public profileForm: FormGroup = this.builder.group({
    email: [{
      value: '',
      disabled: true
    }],
    credit_card: [''],
    address_1: [''],
    address_2: [''],
    city: [''],
    region: [''],
    postal_code: [''],
    country: [''],
    day_phone: [''],
    eve_phone: [''],
    mob_phone: [''],
    shipping_region: [null]
  });
  public customer: Customer;
  public shipping_regions: Array<{id: number; shipping_region: string;}>;

  constructor(
    private appSettings: AppSettings,
    private builder: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private store: Store<fromRoot.AppState>
  ) {
    this.STATIC_URL = this.appSettings.STATIC_URL;
  }

  ngOnInit(){
    if(!this.appSettings.isLoggedIn)
      this.router.navigate(['/customer/login'],{relativeTo: this.route});
    this.store.select(fromRoot.selectorUser).subscribe((cust: Customer)=>{
      if(cust){
        this.customer = cust;
        const values = {
          email: cust.user.email,
          credit_card: cust.credit_card,
          address_1: cust.address_1,
          address_2: cust.address_2,
          city: cust.city,
          region: cust.region,
          postal_code: cust.postal_code,
          country: cust.country,
          day_phone: cust.day_phone,
          eve_phone: cust.eve_phone,
          mob_phone: cust.mob_phone,
          shipping_region: cust.shipping_region?cust.shipping_region:1
        }
        this.profileForm.setValue(values);
      }
    });
    this.customerService.getShippingRegions().subscribe((regions: any) => {
      this.shipping_regions = regions;
      this.profileForm.get('shipping_region').setValue(regions[0].id);
    });
  }

  ngOnDestroy() {

  }

  onSubmit(){
    this.customerService.saveProfile(this.profileForm.value).subscribe((cust: Customer)=>{
      this.store.dispatch(new rootActions.UpdateUser(cust));
      this.toastr.success('User profile saved successfully','Saved')
    });
  }
}
