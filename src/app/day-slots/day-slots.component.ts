import { Component, Input } from '@angular/core';
import { IDayNumber } from '../model/daynumber';
import { ISlots } from '../model/slots.interface';
import { DentistryappintmentDayList } from '../model/apointmentPerWeek';

@Component({
  selector: 'app-day-solts',
  templateUrl: './day-slots.component.html',
  styleUrls: ['./day-slots.component.css']
})
export class DaySlotsComponent {
  @Input() day!:IDayNumber;
  slotsList:Array<ISlots>;
  
  constructor(){
    
    this.slotsList=[];
   }

   ngOnInit(): void {
    this.getAllSlots();
  }
  getAllSlots(){
    this.slotsList.length=0;
    let daynumber=this.day.dayNumber;
   console.log(this.day.dayNumber);
  

    
   let SoltsArray=DentistryappintmentDayList[0].mapOfSlotsList.get(daynumber);
   console.log(SoltsArray);
   let lengthOfSoltsArray=SoltsArray!.length;
   let c=0;
        for(let j=0;j<lengthOfSoltsArray;j++){
          
          if(SoltsArray?.at(j)?.reserved==true){
            this.slotsList.push({available2 :"Available"})
          }

          else{
            this.slotsList.push({available2 :"not available"})
          }
        }
        
       /* this.slotsList.push({available2 :"not available"})*/
  }

}
