import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
          <div [innerHTML]="body"></div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="ms-btn sm secondary flat"
        (click)="ok()">Ok</button>
    </div>
  `,
  styles: [

  ]
})
export class AppAlertComponent implements OnInit {

  @Input() title: string;
  @Input() body: string;

  constructor(public activeModal: NgbActiveModal) {

  }

  ngOnInit() {

  }

  ok() {
    this.activeModal.close();
  }

}
