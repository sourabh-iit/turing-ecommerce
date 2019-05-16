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
  selector: 'app-login',
  templateUrl: './login.html'
})
export class LoginComponent implements OnInit, OnDestroy {

  public STATIC_URL: string;
  public userForm: FormGroup = this.builder.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required]],
    remember: [false],
  });

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
    if(this.appSettings.isLoggedIn)
      this.router.navigate(['/'],{relativeTo: this.route});
  }

  ngOnDestroy() {

  }

  onSubmit(){
    this.customerService.login(this.userForm.value).subscribe((data: any)=>{
      this.store.dispatch(new rootActions.UpdateUser(data));
      this.appSettings.isLoggedIn = true;
      this.router.navigate(['/'],{relativeTo: this.route});
    });
  }
}
