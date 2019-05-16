import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AppConfirmComponent } from '../components/confirm';
import { AppAlertComponent } from '../components/alert';

@Injectable()
export class ConfirmationService {

  private confirmModal: NgbModalRef;

  constructor(private modalService: NgbModal) {

  }

  public confirm(
    title: string = 'Are you sure?',
    prompt: string = 'This will do somethin bad',
    cancelText: string = 'Cancel',
    okText: string = 'Ok',
    okClass: string = 'secondary',
    cancelClass: string = 'default'
  ) {
    const _okClass =  'secondary';
    const _cancelClass =  'default';
    this.confirmModal = this.modalService.open(
      AppConfirmComponent,
      {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'ms-modal-window'
      }
    );
    this.confirmModal.componentInstance.title = title;
    this.confirmModal.componentInstance.prompt = prompt;
    this.confirmModal.componentInstance.cancelText = cancelText;
    this.confirmModal.componentInstance.okText = okText;
    this.confirmModal.componentInstance.okClass = okClass || _okClass;
    this.confirmModal.componentInstance.cancelClass = cancelClass || _cancelClass;
    return this.confirmModal.result;
  }

  public dismissConfirm() {
    this.confirmModal.dismiss();
  }

  public alert(
    title: string = 'Alert Alert!',
    body: string = 'Be careful about this'
  ) {
    const modalRef = this.modalService.open(
      AppAlertComponent,
      {
        backdrop: 'static',
        keyboard: false,
        windowClass: 'ms-modal-window'
      }
    );
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.body = body;

    return modalRef.result;
  }
}
