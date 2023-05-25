import { Component, Input, OnInit
 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  closeResult!: string;
  form:FormGroup
  @Input() slots:any;
  visible:boolean = true;
  visibleButton:boolean = false;
  formDescription:string = 'Appointment Request';
  time="";
  selectedDay:any=this.datePipe.transform(new Date(),"yyyy-MM-dd");
  isNameTouched: boolean = false;

  constructor(private modal: NgbActiveModal, private fb: FormBuilder, private datePipe:DatePipe) {
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

  ngOnInit() {
    this.openForm();
  }
 
openForm(){

    if(this.slots.time==="waiting for confirmation"){
      this.formDescription="Confirmation"
      this.visible=false;
    }
   else{
      this.time=this.slots.time;
      this.visible=true;
    }
  }
  
  
  loginUser(item:any){
    
    console.log("validity",this.form.invalid);
    console.log(this.slots);
    if (this.form.invalid){
      console.log(this.form.invalid)
      return;
    }
    this.visible=false;  
    console.log(this.form)
    alert('thanks for your order!');
    this.slots.time='waiting for confirmation'
    this.modal.close(this.slots.time);
    this.modal.dismiss();

   }
   
   Confirm(){
    console.log(this.time)
    this.slots.time=this.time+' Your Appointment'
    this.slots.reserved=true;
    this.modal.close(this.slots.time);

   }

   Edit(){
    
      this.visible=true;
      //this.visibleButton=false;
      this.formDescription="Edit Appointment"
      
   }

   Unschedule(){
    this.slots.time='Available'
    this.modal.close(this.slots.time);
    
    
   }


  close(){
    this.modal.dismiss();
  }
}
