import { Component, Input } from '@angular/core';
import { ISlots } from 'src/app/model/slots.interface';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';
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
    //console.log(content)
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log("Here I am !!! "+this.closeResult )
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      //console.log("Here I am !!! "+this.getDismissReason(reason) )
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
