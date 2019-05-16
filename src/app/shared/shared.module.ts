import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmationService } from './services/confirmation';
import { StatusTextPipe } from './pipes';
import { AppAlertComponent } from './components/alert';
import { AppConfirmComponent } from './components/confirm';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  entryComponents: [
  ],
  declarations: [
    StatusTextPipe,
    AppAlertComponent,
    AppConfirmComponent
  ],
  exports: [
    StatusTextPipe
  ],
  providers: [
    ConfirmationService,
  ]
})
export class SharedModule {

}
