import { Component, ElementRef, OnInit } from '@angular/core';
import { DentistryappintmentDayList } from 'src/app/data/appointmentDay';
import { jsonaday } from 'src/app/model/jsonaday.intrface';
import { ITime } from 'src/app/model/time.interface';

@Component({
  selector: 'app-monthly-view',
  templateUrl: './monthly-view.component.html',
  styleUrls: ['./monthly-view.component.css']
})
export class MonthlyViewComponent implements OnInit{
  DentistryappintmentDayList= DentistryappintmentDayList;
  dayList:Array<jsonaday>;
  counterday!:Array<ITime>;
  today: Date = new Date();
  month:number=this.today.getMonth();
  year:number=this.today.getFullYear();
  selectedDay=this.today.getDate();
  slotList=DentistryappintmentDayList[0].map.get(this.selectedDay);

 months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
date ="Available appointments on "+this.selectedDay+", "+this.months[this.month]+", "+this.year;

dayName = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];
FullDate:string=this.months[this.month]+" "+this.year;

 constructor(private ref :ElementRef){
  this.FullDate;
  this.dayList=[];
  this.dayName;

 }

 ngOnInit(): void {
   this.initCalendar();
   
 }

 


 initCalendar() {
  
  let x=DentistryappintmentDayList[0].map.get(1);
 const firstDay=new Date(this.year,this.month,1);//first day in month with the day name
 const lastDay=new  Date(this.year,this.month+1,0);//last day in the month with the day name
 const prevLastDay=new Date(this.year,this.month,0);
 const prevDays = prevLastDay.getDate();
 const lastDate = lastDay.getDate();
 const day = firstDay.getDay();
 const nextDays =7-lastDay.getDay()-1;
this.FullDate=this.months[this.month]+" "+this.year;
 
 this.dayList.length=0;

 
  
 for(let x=day; x>0; x--){
    let theprevDaysNeeded=prevDays-x+1;
    this.dayList.push({day:theprevDaysNeeded,enable:false,availableSlot:0});
 }

 for(let i = 1; i <= lastDate; i++){
  if(this.month==this.today.getMonth()){
      if(i<this.today.getDate()){
        this.dayList.push({day:i,enable:false,availableSlot:0});
      }
      else if(DentistryappintmentDayList[0].map.has(i)){
        let counter =0;

        let SoltsArray=DentistryappintmentDayList[0].map.get(i);
        let arrayLength=SoltsArray!.length;
        for(let j=0;j<arrayLength;j++){
          if(SoltsArray?.at(j)?.reserved==true){
            counter++;
          }
        }

        this.dayList.push({day:i,enable:true,availableSlot:counter});
      }
      else{
        this.dayList.push({day:i,enable:false,availableSlot:0});
      }
  }
  else if(this.month<this.today.getMonth()||this.year<this.today.getFullYear()){
    this.dayList.push({day:i,enable:false,availableSlot:0});
  }
  else{
      if(DentistryappintmentDayList[0].map.has(i)){
        let counte =0;
        //this.counterday=DentistryappintmentDayList[0].map.size;
        let SoltsArray=DentistryappintmentDayList[0].map.get(i);
        let arrayLength=SoltsArray!.length;
        for(let j=0;j<arrayLength;j++){
          if(SoltsArray?.at(j)?.reserved==true){
            counte++;
          }
        }
      this.dayList.push({day:i,enable:true,availableSlot:counte});
      }
      
      else{
        this.dayList.push({day:i,enable:false,availableSlot:0});
      }
}

}



 for (let j = 1; j <= nextDays; j++) {
  this.dayList.push({day:j,enable:false,availableSlot:0});
  
}

 }

  prevMonth() {
  this.month--;
  if (this.month < 0) {
    this.month = 11;
    this.year--;
  }
  let FullDate=this.months[this.month]+" "+this.year;
  this.initCalendar();
}

nextMonth() {
  this.month++;
  if (this.month > 11) {
    this.month = 0;
    this.year++;
  }
  this.initCalendar();
}

Todaydate(){
  this.month=this.today.getMonth();
  this.year=this.today.getFullYear();
  this.initCalendar();
}

showNumber(day:any){
  this.date="Available appointments on "+day+", "+this.months[this.month]+", "+this.year;
  console.log("parent",day);
  this.selectedDay=Number(day);
  this.slotList=DentistryappintmentDayList[0].map.get(this.selectedDay);
  console.log(this.slotList)
}



}
