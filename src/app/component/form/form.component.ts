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
  
  
  validation(item:any){
    if(this.verifyEmail(item.email)
        && this.verifyBirthday(item.birth)
        && this.verifyZip(item.zip)
        && this.verifyPhone(item.phone)){

          console.log(item)
          this.modalService.dismissAll(ModalDismissReasons.BACKDROP_CLICK);}
   }

  close(){
    this.modalService.dismissAll(ModalDismissReasons.BACKDROP_CLICK);
  }

  verifyEmail(email:string){
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if(expression.test(email)){
      return true;
    }
    return false
  }
  verifyBirthday(dateString :any){
    let birthday = new Date(dateString);
    let now = new Date();
    return now.getFullYear() - birthday.getFullYear() >= 18;
  }
  verifyPhone(phone: string){
    var phoneRegEx =new RegExp("^(\\([0-9]{3}\\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$");
    return phoneRegEx.test(phone);

  }
  verifyZip(zip :string){
    var us = new RegExp("^\\d{5}(-{0,1}\\d{4})?$");
    return us.test(zip);
  }
}
