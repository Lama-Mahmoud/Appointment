import { Component, Input } from '@angular/core';
import { ISlots } from '../model/slots.interface';
import { FormComponent } from '../form/form.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-weekly-slots',
  templateUrl: './weekly-slots.component.html',
  styleUrls: ['./weekly-slots.component.css']
})
export class WeeklySlotsComponent {
  @Input() slots!:ISlots;
  closeResult!: string;
  
  constructor(private modalService: NgbModal){}
  
  openDialog() {
    let content=FormComponent;
    console.log(content)
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
