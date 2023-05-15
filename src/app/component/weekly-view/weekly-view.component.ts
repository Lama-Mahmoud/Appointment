import { Component } from '@angular/core';
import { IDayNumber } from 'src/app/data/daynumber';

@Component({
  selector: 'app-weekly-view',
  templateUrl: './weekly-view.component.html',
  styleUrls: ['./weekly-view.component.css']
})
export class WeeklyViewComponent {
  today: Date = new Date();
  dayList:Array<IDayNumber>;
  currentDay:number=this.today.getDate();
  month:number=this.today.getMonth();
  year:number=this.today.getFullYear();
  dayOfFirstIndexInWeek:number=this.today.getDate();
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
  dayName = [
    " ",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  clinicTime=[
    "9:00 AM",
    "9:15 AM",
    "9:30 AM",
    "9:45 AM",
    "10:00 AM",
    "10:15 AM",
    "10:30 AM",
    "10:45 AM",
    "11:00 AM",
    "11:15 AM",
    "11:30 AM",
    "1:00 PM",
    "1:15 PM" ,
  ]
  h1!:string;
  p:string= new Date().toDateString();
  constructor(){
    this.h1;
    this.p;
    this.dayList=[];
    this.dayName;
    this.clinicTime;
   }
   ngOnInit(): void {
    this.renderCalendar();

    
  }
  
  renderCalendar(){
  let lastDay =new Date(this.today.getFullYear(),this.month + 1, 0).getDate();
  const prevLastDay   = new Date( this.today.getFullYear(), this.month, 0 ).getDate();
  let firstDay=new Date(this.year,this.month,1).getDate();
  const firstDayIndex = this.today.getDay();
  const lastDayIndex  = new Date( this.today.getFullYear(), this.month + 1, 0 ).getDay();
  const nextDays= 7 - lastDayIndex - 1;
  this.h1=this.months[this.month];
  let index=this.today.getDay();
  this.dayOfFirstIndexInWeek=this.currentDay-index;
  this.dayList.length=0;
  

  let daysofnextmonth=0;
  if(this.dayOfFirstIndexInWeek>lastDay){//if the first index is > last day in the month 
   
   let newlastDay=lastDay;//then let the first index be =lastday of the month 
   this.dayList.push({dayNumber:newlastDay})
   for(let i=1; i<7;i++){
        this.dayList.push({dayNumber:i})//push to daylist that come from dayPerWeek interface (day number , if it is enable,map to it the number of slot as key and if it available or not)
      //the use of daylist for sending the data to component(day to the perday component and map to the dayslot component)  
    }
  }

  else if(this.dayOfFirstIndexInWeek<0){//if index one is negative that mean it reach to prev month(this will be use when we click the prev arrow)
    
    for(let i=0; i<7;i++){
      let newprevalue=prevLastDay+this.dayOfFirstIndexInWeek+daysofnextmonth;//last day in the prev month +(todayValue which is -ve value it help to know the number must present it in the calender before prevday)
      //example:the calendar of april 
      //the first week are: 26 27 28 29 30 31 1
      //dayOfFirstIndexInWeek value is =-5
      //then prevalue=prevLastDay(31)+this.todayValue(-5)+z(will start from 0)=31+(-5)+0=26 (for first loop) 
      //then prevalue=prevLastDay(31)+this.todayValue(-5)+z(will be 1)=31+(-5)+1=27 (for 2 loop) and so on... 
      if(newprevalue>prevLastDay){// if prevalue exced prevLastDay the it must start from 1
       
        this.dayList.push({dayNumber:i+this.dayOfFirstIndexInWeek})
      }
      else{//if prevalue(value of days in line 107) < prevLastDay(last day of the prev month)
        
    this.dayList.push({dayNumber:newprevalue})
      
    daysofnextmonth++;
      }
    }
  }

  else if(this.dayOfFirstIndexInWeek==lastDay){//if the value is =last Day of the month then print the value then start from 1 to 6(this will be use when we click the next arrow)
    
    this.dayList.push({dayNumber:this.dayOfFirstIndexInWeek})//here will print last day of the prev month
    for(let i=1; i<7;i++){//since first index in week is last day of prev month then it will print 1 to 6
      
      this.dayList.push({dayNumber:i})
    
    }
  }

  else if(this.dayOfFirstIndexInWeek==0){//if the value is =0 that mean this value must be fill by the lastday value of prev month(this will be use when we click the prev arrow)
    
    this.dayList.push({dayNumber:prevLastDay})
    for(let i=1; i<7;i++){//her will start print the first day of the month we are in it
      
      this.dayList.push({dayNumber:i})
    }
  }

  else{//if the dayOfFirstIndexInWeek is still in the range of month days
    
  for(let i=0; i<7;i++){
    let dayvalue=this.dayOfFirstIndexInWeek+i;
    if(dayvalue>lastDay){//if value reach to value which is > lastday of current month then it must start from 1 tell for loop end
      
    this.dayList.push({dayNumber:daysofnextmonth+1})
    daysofnextmonth++;
    }
    else{
      
      this.dayList.push({dayNumber:dayvalue})
    
    }
  }
}
  }

  nextWeek() {
    this.currentDay=this.currentDay+7;
    let lastDay =new Date(this.today.getFullYear(),this.month + 1, 0).getDate();
   if(this.currentDay>lastDay){
    this.month++
    this.currentDay=this.currentDay-lastDay;
  }
    this.renderCalendar();
    
  }
  
  prevWeek() {
    const prevLastDay   = new Date( this.today.getFullYear(), this.month, 0 ).getDate();
    let lastDay =new Date(this.today.getFullYear(),this.month + 1, 0).getDate();
    let newValue=this.currentDay
    this.currentDay=this.currentDay-7;
    if(this.currentDay<=0){
      this.month--;
      this.currentDay=lastDay+this.currentDay;
     this.today.setMonth(this.month);
     this.today.setDate(this.currentDay);
    }
    
    this.renderCalendar();
    
  }
}
