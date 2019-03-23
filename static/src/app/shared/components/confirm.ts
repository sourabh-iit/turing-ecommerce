import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-window',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ title }}</h4>
      <button type="button" class="close" aria-label="Close"
        (click)="activeModal.dismiss('closed')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body confirm-modal-body">
      <div class="row">
        <div class="col-sm-12">
          <div [innerHTML]="prompt"></div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="ms-btn margin-r15 sm flat"
        (click)="activeModal.dismiss()"
        [ngClass]="cancelClass"
        [innerHTML]="cancelText"></button>

      <button class="ms-btn sm flat"
        [ngClass]="okClass"
        (click)="ok()"
        [innerHTML]="okText"></button>
    </div>
  `,
  styles: [

  ]
})
export class AppConfirmComponent implements OnInit {

  @Input() title: string;
  @Input() prompt: string;
  @Input() cancelText: string;
  @Input() okText: string;
  @Input() okClass: string;
  @Input() cancelClass: string;

  constructor(public activeModal: NgbActiveModal) {

  }

  ngOnInit() {

  }

  ok() {
    this.activeModal.close();
  }

  cancel() {
    this.activeModal.dismiss();
  }
}
