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
}
