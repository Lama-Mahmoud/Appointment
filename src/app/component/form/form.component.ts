import { Component, OnInit
 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  closeResult!: string;
  form: FormGroup;
  isNameTouched: boolean = false;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, this.customNameValidator.bind(this)]],
      lname: ['', [Validators.required, this.customNameValidator.bind(this)]],
      email: ['', [Validators.required, this.emailValidator.bind(this)]],
      birth: ['', [Validators.required,this.birthValidator.bind(this)]],
      city: ['', Validators.required],
      zip: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Other methods

  customNameValidator(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.length < 3) {
      return { 'customNameValidator': true };
    }
    return null;
  }

  emailValidator(control: FormControl): ValidationErrors | null {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const valid = emailRegex.test(control.value);

    return valid ? null : { invalidEmail: true };
  }

  validateName() {
    this.isNameTouched = true;
    
  }
  
  birthValidator(control: FormControl): ValidationErrors | null {
    const today= new Date();
    const birth= new Date(control.value);
    const age =today.getFullYear()-birth.getFullYear();
    let valid=false;
    console.log(control.value)
    if(age>18){
      valid=true;
    }
    return valid ? null : { invalidAge: true };
  }

  loginUser() {
    console.log(this.form.value);
    if (this.form.valid) {
      console.log(this.form.valid);
      this.modalService.dismissAll(ModalDismissReasons.BACKDROP_CLICK);
      alert("valid");
      return;
    }

    alert('Thanks for your order!');
  }

  close() {
    this.modalService.dismissAll(ModalDismissReasons.BACKDROP_CLICK);
  }
}
