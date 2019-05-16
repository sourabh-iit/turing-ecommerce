import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AppSettings } from 'src/app/app.constant';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { CustomerService } from '../../services/customer';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

const samePasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirm_password = control.get('confirm_password');

  return password && confirm_password && password.value !== confirm_password.value ? { 'mismatch': true } : null;
};

@Component({
  selector: 'app-register',
  templateUrl: './register.html'
})
export class RegisterComponent implements OnInit, OnDestroy {

  public STATIC_URL: string;
  public registerForm: FormGroup = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirm_password: ['']
  }, { validators: samePasswordValidator });

  constructor(
    private appSettings: AppSettings,
    private builder: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
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
    this.customerService.register(this.registerForm.value).subscribe((res)=>{
      this.toastr.success('You are registered successfully with email address '+this.registerForm.get('email').value, 'Registeration is successful')
      this.router.navigate(['../login/'], {relativeTo: this.route});
    });
  }
}
