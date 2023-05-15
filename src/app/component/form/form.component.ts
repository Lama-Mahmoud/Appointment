import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  closeResult!: string;
  form:FormGroup

  constructor(private modalService: NgbModal, private fb :FormBuilder){
    this.form = this.fb.group({
      name: ['', Validators.required],
      lname: ['', Validators.required],
      phone: ['',Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required],
      birth: ['', Validators.required]
    });
  }
  
  
  loginUser(item:any){

    if (!this.form.invalid){
      console.log(this.form.invalid)
      this.modalService.dismissAll(ModalDismissReasons.BACKDROP_CLICK);
      return;}

    alert('thanks for your order!');
   }

  close(){
    this.modalService.dismissAll(ModalDismissReasons.BACKDROP_CLICK);
  }
}
