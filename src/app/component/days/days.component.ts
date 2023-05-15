import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { jsonaday } from 'src/app/model/jsonaday.intrface';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit{
  @Input() day!:jsonaday;
  elements=document.getElementsByClassName("dayCSS");
  
  @Output() date:EventEmitter<any>=new EventEmitter();
  
  ngOnInit(): void {
    for(let i=0;i<this.elements.length;i++){
      this.elements[i].addEventListener('click',this.showSlots);
    }
  }

  showSlots=(event:any)=>{
    let x=event.srcElement.innerText;
    this.date.emit(x);
  }
}
