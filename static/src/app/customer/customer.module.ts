import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';
import { CustomerRoutingModule } from './customer.router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { CustomerService } from './services/customer';
import { ProfileComponent } from './components/profile/profile';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  exports: [
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    NgbModule,
    CustomerRoutingModule
  ],
  providers: [
    CustomerService
  ],
  entryComponents: [
  ]
})
export class CustomerModule { }
