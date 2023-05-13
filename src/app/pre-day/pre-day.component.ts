import { Component, Input } from '@angular/core';
import { IDayNumber } from '../model/daynumber';
import { FormComponent } from '../form/form.component';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pre-day',
  templateUrl: './pre-day.component.html',
  styleUrls: ['./pre-day.component.css']
})
export class PreDayComponent {
  @Input() day!:IDayNumber;
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
