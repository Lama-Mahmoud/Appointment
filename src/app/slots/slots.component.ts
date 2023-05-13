import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { ITime } from '../model/time.interface';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';


@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent {
  @Input() time! :ITime;
  closeResult!: string;
  @Output() reserved : EventEmitter<boolean> =new EventEmitter();

  constructor(private modalService: NgbModal){}
  
  openDialog() {
    let content=FormComponent;
    console.log(content)
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.time.reserved=true;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
