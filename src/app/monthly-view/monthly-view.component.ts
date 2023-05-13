import { Component, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { jsonaday } from '../model/jsonaday.intrface';
import { DentistryappintmentDayList } from '../model/appointmentDay';
import { ITime } from '../model/time.interface';

@Component({
  selector: 'app-monthly-view',
  templateUrl: './monthly-view.component.html',
  styleUrls: ['./monthly-view.component.css']
})
export class MonthlyViewComponent implements OnInit, OnChanges{
  date ="";
  DentistryappintmentDayList= DentistryappintmentDayList;
  days: number[]; 
  Pdays :number[];
  Ndays :number[];
  dayList:Array<jsonaday>;
  counterday!:Array<ITime>;
  today: Date = new Date();
  month:number=this.today.getMonth();
  year:number=this.today.getFullYear();
  selectedDay!:number;
  slotList!:ITime[] |undefined;

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
FullDate:string=this.months[this.month]+" "+this.year;

 constructor(private ref :ElementRef){
  this.days=[];
  this.Pdays=[];
  this.Ndays=[];
  this.FullDate;
  this.dayList=[];

 }
  ngOnChanges(changes: SimpleChanges): void {

  }

 ngOnInit(): void {
   this.initCalendar();
   this.prevMonth();
   this.nextMonth();
   this.Todaydate();
   console.log(document.getElementsByClassName("active"));
 }

 


 initCalendar() {
  console.log(this.today);//today date
  console.log(this.year);
  console.log(this.month);
  console.log("dentist",DentistryappintmentDayList[0].map);
  
  console.log("dentistry",DentistryappintmentDayList[0].map.get(1));
  let x=DentistryappintmentDayList[0].map.get(1);
  console.log("x is",x?.length);
 const firstDay=new Date(this.year,this.month,1);//first day in month with the day name
 console.log("firstDay: " + firstDay);

 const lastDay=new  Date(this.year,this.month+1,0);//last day in the month with the day name
 console.log("lastDay: " + lastDay);

 const prevLastDay=new Date(this.year,this.month,0);
 console.log(" prevLastDay: "+ prevLastDay);

 const prevDays = prevLastDay.getDate();
 console.log("prevDays: "+ prevDays);

 const lastDate = lastDay.getDate();
 console.log("lastDate: " + lastDate);
 const day = firstDay.getDay();
 const nextDays =7-lastDay.getDay()-1;
 console.log("next",nextDays);
 console.log("prev",day);
 console.log(lastDate);
 console.log(prevDays);
  this.FullDate=this.months[this.month]+" "+this.year;


console.log(this.FullDate);
 
 this.dayList.length=0;

 
  let i=0;
 for(let x=day; x>0; x--){
 
  this.Pdays[i]=prevDays-x+1;
  let z=prevDays-x+1;
  
  console.log("z:",z);
 this.dayList.push({day:z,enable:false,availableSlot:0});
  i++;
 }
 console.log("Prev Day:",this.Pdays);
 
 
 let s=0;
 for(let i = 1; i <= lastDate; i++){
  this.days[s]=i;
  if(this.month==this.today.getMonth()){
      if(i<this.today.getDate()){
        this.dayList.push({day:i,enable:false,availableSlot:0});
        console.log(this.today.getDay());
      }
      else if(DentistryappintmentDayList[0].map.has(i)){
        let counte =0;
        //this.counterday=DentistryappintmentDayList[0].map.size;
        let x=DentistryappintmentDayList[0].map.get(i);
        let z=x!.length;
        for(let j=0;j<z;j++){
          if(x?.at(j)?.reserved==true){
            counte++;
          }
        }

        this.dayList.push({day:i,enable:true,availableSlot:counte});
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
        let x=DentistryappintmentDayList[0].map.get(i);
        let z=x!.length;
        for(let j=0;j<z;j++){
          if(x?.at(j)?.reserved==true){
            counte++;
            console.log(counte);
          }
        }
      this.dayList.push({day:i,enable:true,availableSlot:counte});
      }
      
      else{
        this.dayList.push({day:i,enable:false,availableSlot:0});
      }
}
  s++;
}
 console.log("Days of current month:",this.days);


 let n=0;
 for (let j = 1; j <= nextDays; j++) {
  this.Ndays[n]=j;
  this.dayList.push({day:j,enable:false,availableSlot:0});
  n++;
}
console.log("Next Days",this.Ndays);
console.log(this.dayList);
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

changeToFalse(event :any){
  let time :ITime= {time:event.innerText, reserved:false}
  let indexOfSlot=this.slotList?.indexOf(time);
  console.log(indexOfSlot);
  console.log();
}

}
