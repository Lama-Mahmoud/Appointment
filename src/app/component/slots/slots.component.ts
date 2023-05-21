import { Component, Input, TemplateRef } from '@angular/core';
import { ITime } from 'src/app/model/time.interface';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';


@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent {
  @Input() slots! :ITime;
  closeResult!: string;

  constructor(private modalService: NgbModal){}
  
  openDialog() {
    let content=FormComponent;
    let timeValue=this.slots.time;
    console.log(timeValue)
    const ref = this.modalService.open(content);
    ref.componentInstance.slots = this.slots;
    
    ref.result.then((time) => {
      this.slots.time=time;
      console.log(this.slots.time);
    if(this.slots.time=="not available"){
       // this.slots.time=timeValue;
        this.slots.reserved=true;
        console.log(timeValue)
        
      }
    else if(this.slots.time=="Available"){
        //this.slots.time=timeValue;
        this.slots.reserved=false;
        
        console.log(timeValue)
      }
    
    console.log(time);
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
