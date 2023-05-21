import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { jsonaday } from 'src/app/model/jsonaday.intrface';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent{
  @Input() day!:jsonaday;
  @Input() selected!:any;
  @Input() month!:any;
  elements=document.getElementsByClassName("dayCSS");
  
  @Output() date:EventEmitter<any>=new EventEmitter();

  showSlots=(event:any)=>{
    let x=event.srcElement.value;
    console.log(event.srcElement.value)
    this.date.emit(x);
    console.log(this.selected.selectedDay,this.month)
  }
}
